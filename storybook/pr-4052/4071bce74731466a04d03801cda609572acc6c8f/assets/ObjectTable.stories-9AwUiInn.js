import{j as i}from"./iframe-CWKtkIUB.js";import{O as p}from"./object-table-5R7mlYop.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-s8A5MDlL.js";import"./preload-helper-ipGJxtLm.js";import"./Table-C5DJbWx6.js";import"./index-DmJxPlh_.js";import"./Dialog-D-A3RiqJ.js";import"./cross-DEu5gm-s.js";import"./svgIconContainer-CNCTNhPA.js";import"./useBaseUiId-B8eULTI6.js";import"./InternalBackdrop-DGmr5HTr.js";import"./composite-CLrQ0Pw0.js";import"./index-Pd0hKwBH.js";import"./index-CDK29Ulj.js";import"./index-B7xDDX9i.js";import"./useEventCallback-CiKQuPHs.js";import"./SkeletonBar-loAgoXS5.js";import"./LoadingCell-Ctm-dPkr.js";import"./ColumnConfigDialog-ti5A_XUc.js";import"./DraggableList-D8bzxM_t.js";import"./search-D674kfs0.js";import"./Input-CX60mJQX.js";import"./useControlled-BMMn65Nk.js";import"./Button-BfO_B2Gb.js";import"./small-cross-BACObYvZ.js";import"./ActionButton-BoSuUP-h.js";import"./Checkbox-tCScO48D.js";import"./useValueChanged-C5pU5icH.js";import"./CollapsiblePanel-wQjTDLAh.js";import"./MultiColumnSortDialog-thIR0zTv.js";import"./MenuTrigger-DA9injW0.js";import"./CompositeItem-C2bCi6DR.js";import"./ToolbarRootContext-DoNt8TAQ.js";import"./getDisabledMountTransitionStyles-B3rYUkCj.js";import"./getPseudoElementBounds-W7L9XS3F.js";import"./chevron-down-lIwS08X8.js";import"./index-BG-YC_yo.js";import"./error-y4GKwRxO.js";import"./BaseCbacBanner-DAKVcN5l.js";import"./makeExternalStore-Cwu6Hqp2.js";import"./Tooltip-BPBtSQy6.js";import"./PopoverPopup-D7gPsbnN.js";import"./debounce-D1aK-pGn.js";import"./useOsdkClient-u9q269DO.js";import"./tick-c3wuZ6gm.js";import"./DropdownField-KGWqFfVd.js";import"./isEqual-C9GDj2JT.js";import"./withOsdkMetrics-LG6-R3uz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
