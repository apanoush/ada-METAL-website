# ADA Template Website
## Usage
1. Fork (copy) this repository by clicking the "Fork" button on the top right corner.
2. Go to "Settings" -> "Pages" in your forked repository. Under "Branch" change "None" to "master" and click "Save".
3. Edit the _config.yml file in your forked repository to change the site title (after "title:") and description (after "description:").
4. Build your own page by creating a .md file, formatting is done with standard [GitHub Markdown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), we provide an example file "example.md" in the repository.
5. Add your page to the site by editing the _config.yml file in your forked repository. Under "navigation:" add a new pair of "- title:" and "url:", and fill their value with your page name and .md file name. Remember to remove the "- title:" and "url:" pair for the example page.
6. Go back to "Settings" -> "Pages" to find your website link.
