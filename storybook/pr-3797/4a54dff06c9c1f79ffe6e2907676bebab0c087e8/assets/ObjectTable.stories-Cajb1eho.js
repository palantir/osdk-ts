import{j as i}from"./iframe-QFYCOUfb.js";import{O as p}from"./object-table-B2DYjUEt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ohzqtvvZ.js";import"./preload-helper-BvwAeipT.js";import"./Table-Bu_7BoL1.js";import"./index-r2m1MzwO.js";import"./Dialog-Bfc7HWT_.js";import"./cross-lN9Ye2mz.js";import"./svgIconContainer-BTKuLZDT.js";import"./useBaseUiId-CWCv1RJ1.js";import"./InternalBackdrop-pmr-irU1.js";import"./composite-0JPHK5U6.js";import"./index-CFtpFERN.js";import"./index-p1_Aw4sU.js";import"./index-BYeoZqW9.js";import"./useEventCallback-BvukxHI1.js";import"./SkeletonBar-T8DUjg20.js";import"./LoadingCell-BDvbN2hs.js";import"./ColumnConfigDialog-BkXWINBS.js";import"./DraggableList-ihgDUqV9.js";import"./search-A6D3Nphw.js";import"./Input-XI1xCScB.js";import"./useControlled-DvS8LHTQ.js";import"./isEqual-WnM2x0h8.js";import"./isObject-B9e3BPlM.js";import"./Button-CCCx6o1T.js";import"./ActionButton-1xA6c8aW.js";import"./Checkbox-DBnhpo7E.js";import"./useValueChanged-DnV0Ju92.js";import"./CollapsiblePanel-1WpAY5PZ.js";import"./MultiColumnSortDialog-D1F5VEBP.js";import"./MenuTrigger-zbuTgZkT.js";import"./CompositeItem-BzxfLAiE.js";import"./ToolbarRootContext-DxtjrKYm.js";import"./getDisabledMountTransitionStyles-B4wrMBNf.js";import"./getPseudoElementBounds-C-0UF2Q5.js";import"./chevron-down-8j45KwVK.js";import"./index-nzm4ayqk.js";import"./error-DkSBwZqT.js";import"./BaseCbacBanner-CeATJGkx.js";import"./makeExternalStore-jT5LUsaV.js";import"./Tooltip-CKjmDpHV.js";import"./PopoverPopup-DUtHyKME.js";import"./toNumber-5VBp_Htu.js";import"./useOsdkClient-D2V1bKMi.js";import"./tick-C1D_7X95.js";import"./DropdownField-CcWDIdAB.js";import"./withOsdkMetrics-BwOMOUV-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
