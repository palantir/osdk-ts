import{j as i}from"./iframe-UYCLthTQ.js";import{O as p}from"./object-table-DImQuH9S.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BWlW24iF.js";import"./preload-helper-Dz4E7M7Q.js";import"./Table-C2TWF7Cq.js";import"./index-D9-cjch2.js";import"./Dialog-DuoePkOB.js";import"./cross-BTIlSghM.js";import"./svgIconContainer-CSCo4VbW.js";import"./useBaseUiId-D_3Zahva.js";import"./InternalBackdrop-D-QyvJBW.js";import"./composite-CoPLS_PY.js";import"./index-MvHsJMCi.js";import"./index-CwqHoYwn.js";import"./index-DG3Dj0nZ.js";import"./useEventCallback-Dy795WfC.js";import"./SkeletonBar-Q06YcXYq.js";import"./LoadingCell-B2uS_rBv.js";import"./ColumnConfigDialog-xbncks_W.js";import"./DraggableList-5C_-7pLf.js";import"./search-O4v6z_KC.js";import"./Input-CEJvZIVl.js";import"./useControlled-BsiMxbV4.js";import"./Button-D_NPrqs2.js";import"./small-cross-DhT3GGuR.js";import"./ActionButton-bRkldw58.js";import"./Checkbox-qaZlBavv.js";import"./useValueChanged-TyLqj8UB.js";import"./CollapsiblePanel-C1s-WFkA.js";import"./MultiColumnSortDialog-CmD2Or6u.js";import"./MenuTrigger-DsIXfpa7.js";import"./CompositeItem-C4gD3gl2.js";import"./ToolbarRootContext-Dz0u6CZi.js";import"./getDisabledMountTransitionStyles-xim2gtNb.js";import"./getPseudoElementBounds-CgjC-nms.js";import"./chevron-down-CsxN-uGL.js";import"./index-DSgxSOB9.js";import"./error-Lq_gB-8h.js";import"./BaseCbacBanner-CT4YrDi4.js";import"./makeExternalStore-DTCTUDfU.js";import"./Tooltip-C6Y1hCeK.js";import"./PopoverPopup-hS14Tedr.js";import"./debounce-C6pOncFn.js";import"./useOsdkClient-DMikbfnK.js";import"./tick-BIgTeca4.js";import"./DropdownField-BWwVTe4_.js";import"./isEqual-F9ZP9YZl.js";import"./withOsdkMetrics-CbCyTjOI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
