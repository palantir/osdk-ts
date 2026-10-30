import{j as i}from"./iframe-BR4-xVYI.js";import{O as p}from"./object-table-3cpMyVSZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DmQORnr2.js";import"./preload-helper-DbBEOmrA.js";import"./Table-BXcklVqv.js";import"./index-Bl34zl0T.js";import"./Dialog-DJ-9aMTh.js";import"./cross-C0jaUfu0.js";import"./svgIconContainer-DsRlczG5.js";import"./useBaseUiId-BYzMy68a.js";import"./InternalBackdrop-BNRMpNwm.js";import"./composite-B5Ni56Yc.js";import"./index-CeuhUjnH.js";import"./index-ucjEhEXO.js";import"./index--n8M5GBW.js";import"./useEventCallback-CmAo7nrm.js";import"./SkeletonBar-B9zQOriA.js";import"./LoadingCell-lit_1UVA.js";import"./ColumnConfigDialog-CJy6PIYo.js";import"./DraggableList-Bvft9JGy.js";import"./search-WudRV3Lk.js";import"./Input-D7vx6zqX.js";import"./useControlled-DN7CYAB2.js";import"./Button-B43-ydWW.js";import"./small-cross-BeM5hQZj.js";import"./ActionButton-Dfm9fwti.js";import"./Checkbox-Zy4E_9pG.js";import"./useValueChanged-DfThrQO8.js";import"./CollapsiblePanel-Ceg7ith-.js";import"./MultiColumnSortDialog-M8x7mcq8.js";import"./MenuTrigger-DUcDUu6E.js";import"./CompositeItem-CeAvgtlv.js";import"./ToolbarRootContext-DPLqybB9.js";import"./getDisabledMountTransitionStyles-BCPsmVLX.js";import"./getPseudoElementBounds-DJ1Dele8.js";import"./chevron-down-B00usCld.js";import"./index-DEPbvTfn.js";import"./error-DEM7tD3T.js";import"./BaseCbacBanner-Bz-wy3-U.js";import"./makeExternalStore-BG7GijXm.js";import"./Tooltip-CY7AHoDM.js";import"./PopoverPopup-C1kMPgqS.js";import"./debounce-GtwJabeu.js";import"./useOsdkClient-CXmIXXsP.js";import"./tick-BIjGCOT-.js";import"./DropdownField-DjgoPeZ6.js";import"./isEqual-BBHofsAC.js";import"./withOsdkMetrics-kvzuwV_e.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
