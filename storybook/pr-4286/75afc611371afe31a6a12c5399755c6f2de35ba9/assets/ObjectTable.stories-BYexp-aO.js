import{j as i}from"./iframe-DFOR2onK.js";import{O as p}from"./object-table-BM-RBqZJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DAg9uctw.js";import"./preload-helper-ByXSQw30.js";import"./Table-D1mkb7tB.js";import"./index-BVkLsmBt.js";import"./Dialog-Ccg87r_l.js";import"./cross-C9kRknfx.js";import"./svgIconContainer-DjkUaIxk.js";import"./useBaseUiId-Dsp7jumh.js";import"./InternalBackdrop-DvUh0nKI.js";import"./composite-CRJMZ4tZ.js";import"./index-DY_-DVUB.js";import"./index-OUX8MUQn.js";import"./index-Dmn1pJPY.js";import"./useEventCallback-PkaVDlo9.js";import"./SkeletonBar-BdI0Hxl4.js";import"./LoadingCell-DUvn0GzQ.js";import"./ColumnConfigDialog-CeIa-WiN.js";import"./DraggableList-lAwP0gTH.js";import"./search-4X3AVeSP.js";import"./Input-tEOQdwSz.js";import"./useControlled-CtMTriq1.js";import"./Button-MewiuY9J.js";import"./small-cross-BDzP7tAy.js";import"./ActionButton-DSajpJr8.js";import"./Checkbox-DnvdOU0u.js";import"./useValueChanged-CgXmK7v2.js";import"./CollapsiblePanel-B8axV45E.js";import"./MultiColumnSortDialog-DrEjeaaR.js";import"./MenuTrigger-D29Qjhdm.js";import"./CompositeItem-CtUWLqeJ.js";import"./ToolbarRootContext-DMxHSqVF.js";import"./getDisabledMountTransitionStyles-LtGV7XWM.js";import"./getPseudoElementBounds-Bzd3adVt.js";import"./chevron-down-BMNaDKAR.js";import"./index-BCk6aVbl.js";import"./error-BAimxzZD.js";import"./BaseCbacBanner-rPUtaKKQ.js";import"./makeExternalStore-CaVoQzcs.js";import"./Tooltip-BbqW-UvY.js";import"./PopoverPopup-Cuu9Pm_U.js";import"./debounce-CgV8usSM.js";import"./useOsdkClient-MN7PkG3f.js";import"./tick-DIYXFliV.js";import"./DropdownField-DXyB4HbV.js";import"./isEqual-CesuJwK0.js";import"./withOsdkMetrics-of9jSM-3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
