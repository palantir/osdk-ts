import{j as i}from"./iframe-BiX95vgM.js";import{O as p}from"./object-table-BNQm4Bsr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DC_H6vO9.js";import"./preload-helper-DWnaR-1b.js";import"./Table-acSUwZXb.js";import"./index-BabfefxA.js";import"./Dialog-BDQ5_Bfx.js";import"./cross-C7wa8kmV.js";import"./svgIconContainer-BCrh5jbf.js";import"./useBaseUiId-CQekfIk1.js";import"./InternalBackdrop-CE-LWvCh.js";import"./composite-KUIWn9JP.js";import"./index-CqOEHXIi.js";import"./index-DsTIq2po.js";import"./index-k1PdwCZb.js";import"./useEventCallback-Cmi2IqX2.js";import"./SkeletonBar-B9Rdl8b0.js";import"./LoadingCell-CNYJZaMp.js";import"./ColumnConfigDialog-B8jLQSvW.js";import"./DraggableList-J8UJKRI9.js";import"./search-BRep0j7S.js";import"./Input-mW8oBDz9.js";import"./useControlled-B0weLlnb.js";import"./Button-DbzWoDvM.js";import"./small-cross-Boqia_iR.js";import"./ActionButton-BsI0HZIG.js";import"./Checkbox-DEa-GyN1.js";import"./useValueChanged-DAGoXpR0.js";import"./CollapsiblePanel-COHaPPM9.js";import"./MultiColumnSortDialog-CTF13iwp.js";import"./MenuTrigger-D5WFLw3j.js";import"./CompositeItem-BFJIxEVd.js";import"./ToolbarRootContext-DqKQJUCi.js";import"./getDisabledMountTransitionStyles-B3gRsSQK.js";import"./getPseudoElementBounds-wEO7NvSI.js";import"./chevron-down-Qcf4cgke.js";import"./index-BdjoCnA2.js";import"./error-Bo4C15lT.js";import"./BaseCbacBanner-9jPJRVZK.js";import"./makeExternalStore-BiSG9WI-.js";import"./Tooltip-CAv1GjkH.js";import"./PopoverPopup-BhUB52O1.js";import"./debounce-DvrF_ne3.js";import"./useOsdkClient-CBCEya-4.js";import"./tick-DJUMmsvK.js";import"./DropdownField-DzcwNOIS.js";import"./isEqual-6CvQLIm3.js";import"./withOsdkMetrics-Bu7X3_wp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
