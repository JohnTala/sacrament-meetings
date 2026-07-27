"use client";

import { useActionState } from "react";
import { State } from "@/lib/form-state";

import type { SacramentMeeting } from "@/lib/types";


interface MeetingFormProps {
  meeting?: SacramentMeeting;
  action: (
    state: State,
    formData: FormData
  ) => Promise<State>;
}

const initialState: State = {
  message: "",
  errors: {},
};

export default function MeetingForm({
  meeting,
  action,
}: MeetingFormProps) {
  const [state, formAction, isPending] = useActionState(
    action,
    initialState
  );

  return (
    <form action={formAction}  aria-busy={isPending} className="space-y-8">

      {/* Date */}
      <div>
        <label
          htmlFor="date"
          className="mb-2 block text-sm font-medium"
        >
          Meeting Date
        </label>

        <input
          id="date"
          name="date"
          type="date"
          defaultValue={meeting?.date}
          aria-describedby="date-error"
          className="w-full rounded-md border p-2"
          required
        />

        <div
          id="date-error"
           role="alert"
            aria-live="polite"
        >
          {state.errors?.date?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Meeting Type */}
      <div>
        <label
          htmlFor="meetingType"
          className="mb-2 block text-sm font-medium"
        >
          Meeting Type
        </label>

        <select
          id="meetingType"
          name="meetingType"
          defaultValue={meeting?.meetingType ?? "regular"}
          aria-describedby="meetingType-error"
          className="w-full rounded-md border p-2"
        >
          <option value="regular">Regular</option>
          <option value="testimony">Testimony</option>
          <option value="stake">Stake Conference</option>
          <option value="general">General Conference</option>
          <option value="special">Special</option>
        </select>

        <div
          id="meetingType-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.meetingType?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Presiding */}
      <div>
        <label
          htmlFor="presiding"
          className="mb-2 block text-sm font-medium"
        >
          Presiding
        </label>

        <input
          id="presiding"
          name="presiding"
          type="text"
          defaultValue={meeting?.presiding}
          aria-describedby="presiding-error"
          className="w-full rounded-md border p-2"
          required
        />

        <div
          id="presiding-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.presiding?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Conducting */}
      <div>
        <label
          htmlFor="conducting"
          className="mb-2 block text-sm font-medium"
        >
          Conducting
        </label>

        <input
          id="conducting"
          name="conducting"
          type="text"
          defaultValue={meeting?.conducting}
          aria-describedby="conducting-error"
          className="w-full rounded-md border p-2"
          required
        />

        <div
          id="conducting-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.conducting?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

            {/* Announcements */}
      <div>
        <label
          htmlFor="announcements"
          className="mb-2 block text-sm font-medium"
        >
          Announcements
        </label>

        <textarea
          id="announcements"
          name="announcements"
          rows={4}
          defaultValue={meeting?.announcements?.join("\n")}
          aria-describedby="announcements-error"
          className="w-full rounded-md border p-2"
        />

        <div
          id="announcements-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.announcements?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Opening Hymn */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="openingHymnNumber"
            className="mb-2 block text-sm font-medium"
          >
            Opening Hymn Number
          </label>

          <input
            id="openingHymnNumber"
            name="openingHymnNumber"
            type="number"
            defaultValue={meeting?.openingHymn.number}
            aria-describedby="openingHymnNumber-error"
            className="w-full rounded-md border p-2"
            required
          />

          <div
            id="openingHymnNumber-error"
            aria-live="polite"
             role="alert"
          >
            {state.errors?.openingHymnNumber?.map((error) => (
              <p
                key={error}
                className="mt-1 text-sm text-red-600"
              >
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="openingHymnTitle"
            className="mb-2 block text-sm font-medium"
          >
            Opening Hymn Title
          </label>

          <input
            id="openingHymnTitle"
            name="openingHymnTitle"
            defaultValue={meeting?.openingHymn.title}
            aria-describedby="openingHymnTitle-error"
            className="w-full rounded-md border p-2"
            required
          />

          <div
            id="openingHymnTitle-error"
            aria-live="polite"
             role="alert"
          >
            {state.errors?.openingHymnTitle?.map((error) => (
              <p
                key={error}
                className="mt-1 text-sm text-red-600"
              >
                {error}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Opening Prayer */}
      <div>
        <label
          htmlFor="openingPrayer"
          className="mb-2 block text-sm font-medium"
        >
          Opening Prayer
        </label>

        <input
          id="openingPrayer"
          name="openingPrayer"
          defaultValue={meeting?.openingPrayer}
          aria-describedby="openingPrayer-error"
          className="w-full rounded-md border p-2"
          required
        />

        <div
          id="openingPrayer-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.openingPrayer?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Ward Business */}
      <div>
        <label
          htmlFor="wardBusiness"
          className="mb-2 block text-sm font-medium"
        >
          Ward Business
        </label>

        <textarea
          id="wardBusiness"
          name="wardBusiness"
          rows={3}
          defaultValue={meeting?.wardBusiness
            .map((item) => item.description)
            .join("\n") ?? ""}
          aria-describedby="wardBusiness-error"
          className="w-full rounded-md border p-2"
        />

        <div
          id="wardBusiness-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.wardBusiness?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Stake Business */}
      <div>
        <label
          htmlFor="stakeBusiness"
          className="mb-2 block text-sm font-medium"
        >
          Stake Business
        </label>

        <select
          id="stakeBusiness"
          name="stakeBusiness"
          defaultValue={String(meeting?.stakeBusiness ?? false)}
          aria-describedby="stakeBusiness-error"
          className="w-full rounded-md border p-2"
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        <div
          id="stakeBusiness-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.stakeBusiness?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

            {/* Sacrament Hymn */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="sacramentHymnNumber"
            className="mb-2 block text-sm font-medium"
          >
            Sacrament Hymn Number
          </label>

          <input
            id="sacramentHymnNumber"
            name="sacramentHymnNumber"
            type="number"
            defaultValue={meeting?.sacramentHymn.number}
            aria-describedby="sacramentHymnNumber-error"
            className="w-full rounded-md border p-2"
            required
          />

          <div
            id="sacramentHymnNumber-error"
            aria-live="polite"
             role="alert"
          >
            {state.errors?.sacramentHymnNumber?.map((error) => (
              <p
                key={error}
                className="mt-1 text-sm text-red-600"
              >
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="sacramentHymnTitle"
            className="mb-2 block text-sm font-medium"
          >
            Sacrament Hymn Title
          </label>

          <input
            id="sacramentHymnTitle"
            name="sacramentHymnTitle"
            defaultValue={meeting?.sacramentHymn.title}
            aria-describedby="sacramentHymnTitle-error"
            className="w-full rounded-md border p-2"
            required
          />

          <div
            id="sacramentHymnTitle-error"
            aria-live="polite"
             role="alert"
          >
            {state.errors?.sacramentHymnTitle?.map((error) => (
              <p
                key={error}
                className="mt-1 text-sm text-red-600"
              >
                {error}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Speaker */}
      <div>
        <label
          htmlFor="speakerName"
          className="mb-2 block text-sm font-medium"
        >
          Speaker Name
        </label>

        <input
          id="speakerName"
          name="speakerName"
          defaultValue={meeting?.speakers[0]?.name}
          aria-describedby="speakerName-error"
          className="w-full rounded-md border p-2"
          required
        />

        <div
          id="speakerName-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.speakerName?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="speakerTopic"
          className="mb-2 block text-sm font-medium"
        >
          Speaker Topic
        </label>

        <input
          id="speakerTopic"
          name="speakerTopic"
          defaultValue={meeting?.speakers[0]?.topic}
          aria-describedby="speakerTopic-error"
          className="w-full rounded-md border p-2"
          required
        />

        <div
          id="speakerTopic-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.speakerTopic?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="speakerType"
          className="mb-2 block text-sm font-medium"
        >
          Speaker Type
        </label>

        <select
          id="speakerType"
          name="speakerType"
          defaultValue={meeting?.speakers[0]?.type ?? "speaker"}
          aria-describedby="speakerType-error"
          className="w-full rounded-md border p-2"
        >
          <option value="speaker">Speaker</option>
          <option value="musical-number">Musical Number</option>
        </select>

        <div
          id="speakerType-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.speakerType?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Closing Hymn */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="closingHymnNumber"
            className="mb-2 block text-sm font-medium"
          >
            Closing Hymn Number
          </label>

          <input
            id="closingHymnNumber"
            name="closingHymnNumber"
            type="number"
            defaultValue={meeting?.closingHymn.number ?? ""}
            aria-describedby="closingHymnNumber-error"
            className="w-full rounded-md border p-2"
            required
          />

          <div
            id="closingHymnNumber-error"
            aria-live="polite"
             role="alert"
          >
            {state.errors?.closingHymnNumber?.map((error) => (
              <p
                key={error}
                className="mt-1 text-sm text-red-600"
              >
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="closingHymnTitle"
            className="mb-2 block text-sm font-medium"
          >
            Closing Hymn Title
          </label>

          <input
            id="closingHymnTitle"
            name="closingHymnTitle"
            defaultValue={meeting?.closingHymn.title ?? ""}
            aria-describedby="closingHymnTitle-error"
            className="w-full rounded-md border p-2"
            required
          />

          <div
            id="closingHymnTitle-error"
            aria-live="polite"
             role="alert"
          >
            {state.errors?.closingHymnTitle?.map((error) => (
              <p
                key={error}
                className="mt-1 text-sm text-red-600"
              >
                {error}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* Closing Prayer */}
      <div>
        <label
          htmlFor="closingPrayer"
          className="mb-2 block text-sm font-medium"
        >
          Closing Prayer
        </label>

        <input
          id="closingPrayer"
          name="closingPrayer"
          defaultValue={meeting?.closingPrayer ?? ""}
          aria-describedby="closingPrayer-error"
          className="w-full rounded-md border p-2"
          required
        />

        <div
          id="closingPrayer-error"
          aria-live="polite"
           role="alert"
        >
          {state.errors?.closingPrayer?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Form Message */}
      {state.message && (
        <div
          aria-live="polite"
          className="rounded-md border border-red-300 bg-red-50 p-3 text-red-700"
        >
          {state.message}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending
            ? "Saving..."
            : meeting
              ? "Update Meeting"
              : "Create Meeting"}
        </button>
      </div>
    </form>
  );
}