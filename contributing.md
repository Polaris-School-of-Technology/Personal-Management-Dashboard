## General Guidelines ⚙️
- **Align with Project Goals**: Ensure your contribution is aligned with the overall goal of the project.
- **Follow Code Style**: Adhere to the existing code style for consistency. This includes variable names, indentation, and function structures.
- **Ask Questions**: If you are unsure about something, feel free to ask! We are happy to help and guide you.
## Code of Conduct 🧑‍🤝‍🧑
By participating in this project, you agree to abide by the following Code of Conduct:
- **Be Respectful**: Treat all contributors and maintainers with respect, kindness, and empathy, regardless of background or experience.
- **Be Constructive**: Provide thoughtful, constructive feedback. Help others grow through positive communication.
- **Be Patient**: Remember that contributors and maintainers might be balancing other tasks. Patience is appreciated.

## ✅ Do's
- **Do write clear, descriptive commit messages**.  
  A good commit message should summarize what the change does, why it's being made, and any additional context if needed.
  - Example: `Fixes issue with incorrect date format in the user profile`.

- **Do test your changes**.  
  (Optional)Run tests and ensure your code does not break existing functionality. 

- **Do ask for help when needed**.  
  If you're uncertain about any aspect of the code or contribution process, ask! We’re happy to assist.

- **Do ensure your code follows the repository’s coding standards**.  
  Stick to the same formatting and style used in the existing codebase.

## 🚫 Don’ts
- **Don’t submit incomplete code or untested changes**.  
  Make sure your changes are fully implemented and tested before submitting a pull request.

- **Don’t submit unrelated changes in the same pull request**.  
  Each PR should focus on one feature or bug fix. Keep things organized.

- **Don’t raise duplicate issues**.  
  Before submitting a new issue, make sure to check the open issues to avoid duplicates.

## Raising Issues 🛠️

When raising an issue, please follow these steps to make sure it's well-defined and easy to address:

1. **Search Existing Issues**: Before creating a new issue, check the existing issues to see if it has already been reported. If it has, add a comment to the existing issue instead of opening a new one.

2. **Make the Title Clear and Concise**:  
   The title should immediately describe the problem or feature request in a few words.

3. **Provide a Screen-Recorded Video** (for UI-related issues):  
   If your issue involves a visual bug or a UI-related problem, please provide a screen-recorded video showcasing the issue. This will help us understand the problem better.

4. **Be Consistent with Code and UI/UX Styling**:
   - **Code Styling**: Please follow the coding style that is already used in the repository. Refer to existing code to understand the structure and conventions.
   - **UI/UX Styling**: If you suggest changes to the user interface, ensure consistency with the existing design. For example, if the interface color scheme uses predominantly one color (e.g., green), avoid making arbitrary changes unless absolutely necessary.

5. **Issue Assignment**:  
   - Do not request to be assigned multiple issues at once. Focus on one issue, and once your pull request (PR) is merged, you can request another issue.

6. Writing Clear PR Titles and Descriptions

The title of your PR should briefly summarize the changes and their purpose. It should:

- Be **concise** and easy to understand.
- Be **descriptive** about what the PR does.
- Follow a **consistent format**.

#### Recommended formats:
- **`Add [feature]`**: For introducing new features.  
  Example: `Add dark mode toggle to settings page`
  
- **`Fix [issue]`**: For fixing a specific bug or issue.  
  Example: `Fix login error on mobile devices`
  
- **`Update [functionality]`**: For minor updates or improvements to existing functionality.  
  Example: `Update user profile UI for better accessibility`
  
- **`Refactor [code]`**: For restructuring code without changing its behavior.  
  Example: `Refactor authentication middleware for better error handling`
  
- **`Remove [feature]`**: For removing deprecated or unused features.  
  Example: `Remove support for legacy API version 1`

### Writing a Good PR Description

The PR description should explain **what** the PR does, **why** it is needed, and **how** the change was implemented. A good description provides reviewers with enough context to understand the change.

#### What to include in the PR description:

1. **Short Summary of the Change**:  
   Begin with a brief overview of what your PR does. Keep this section concise.

2. **Context and Motivation**:  
   Explain **why** the change is necessary. Mention any issues or user feedback that prompted this change.

3. **Detailed Explanation of the Implementation**:  
   Explain **how** the change was implemented. If there are multiple steps or key parts of the code that need clarification, provide details here.

4. **Related Issues**:  
   Reference any related issues by their number. For example:
   - `Fixes #123`
   - `Closes #456`

5. **Breaking Changes (if applicable)**:  
   If your PR introduces breaking changes, mention them clearly. Include migration steps if necessary.

6. **Testing Instructions**:  
   Provide steps on how to test the changes. If you’ve added tests, mention that as well:
   - Test the feature by [steps].
   - Verify that [specific behavior] works as expected.

7. **Screenshots or Visual Changes**:  
   If your PR includes UI changes, add screenshots or GIFs to help reviewers visualize the changes.

#### Example of a Good PR Description:

---

**Title**: `Add dark mode toggle to settings page`

**Description**:  
This PR introduces a dark mode toggle to the settings page, allowing users to switch between light and dark themes.

- **Context**:  
  Users have requested a way to toggle between light and dark modes for better accessibility and improved user experience at night. This change addresses that request.

- **Implementation**:  
  - Added a `ThemeSwitcher` component that lets users toggle between light and dark modes.
  - Stored user preferences in `localStorage` to persist the theme choice across sessions.
  - Updated CSS to support both light and dark themes using CSS variables.
  - Added tests to ensure that the toggle works correctly and the preference is saved.

- **Related Issue**:  
  Closes #123 – Add dark mode feature.

- **Testing**:  
  - Navigate to the settings page and toggle the dark mode option.
  - Verify that the theme changes immediately and persists after a page reload.
  
- **Screenshots**:  
  ![Dark Mode Toggle](https://link-to-screenshot.com)
