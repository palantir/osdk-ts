import{j as i}from"./iframe-DnXG6ria.js";import{O as p}from"./object-table-KFsg62x-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Jj9Fb50o.js";import"./preload-helper-DdcgdAiM.js";import"./Table-CQJ4vgR6.js";import"./index-DxGDEKEE.js";import"./Dialog-CNCtnPRX.js";import"./cross-DGHgZ4N6.js";import"./svgIconContainer-ChS4vANK.js";import"./useBaseUiId-SDlMWfrq.js";import"./InternalBackdrop-BQ-7_gxa.js";import"./composite-BEEpir5s.js";import"./index-DxHtJywa.js";import"./index-BqFzb3S3.js";import"./index-BzoiIP9u.js";import"./useEventCallback-DjluW_k9.js";import"./SkeletonBar-Dwni2nXR.js";import"./LoadingCell-Bn_yeQJc.js";import"./ColumnConfigDialog-DlSyRhLb.js";import"./DraggableList-CbZ-0Bi-.js";import"./search-CeZhHxk0.js";import"./Input-Bl1_npZH.js";import"./useControlled-r9d6OnMX.js";import"./isEqual-gAaIwKbo.js";import"./isObject-A2Q3YumP.js";import"./Button-cT8XGKmn.js";import"./ActionButton-w_6XSUcW.js";import"./Checkbox-CD6f-efu.js";import"./useValueChanged-DPra_eNP.js";import"./CollapsiblePanel-BiYr8rym.js";import"./MultiColumnSortDialog-CEZrlD_o.js";import"./MenuTrigger-CWLeW0Na.js";import"./CompositeItem-CIThtc7F.js";import"./ToolbarRootContext-Z4gE_V_n.js";import"./getDisabledMountTransitionStyles-9qXvSGVO.js";import"./getPseudoElementBounds-BZ3Q47XE.js";import"./chevron-down-DxHRdvtD.js";import"./index-CYr1UXPi.js";import"./error-BVlgT8A_.js";import"./BaseCbacBanner-CRDypnj8.js";import"./makeExternalStore-DUeGYV2j.js";import"./Tooltip-D-bOi1It.js";import"./PopoverPopup-_C67I76H.js";import"./toNumber-BGtg9XJ9.js";import"./useOsdkClient-BYVbAAl7.js";import"./tick-DafkJj6Q.js";import"./DropdownField-BmAVXTfo.js";import"./withOsdkMetrics-k-U64tRw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
