import{j as i}from"./iframe-Bl9Agv3T.js";import{O as p}from"./object-table-BG0To-J4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B-yTkLlH.js";import"./preload-helper-C2Q81Ac3.js";import"./Table-BlXfDqyU.js";import"./index-DsMKsdV8.js";import"./Dialog-DZ9rfxK8.js";import"./cross-DNHfVbpu.js";import"./svgIconContainer-CYsYLgfA.js";import"./useBaseUiId-CxMJijpy.js";import"./InternalBackdrop-C4VzyeDT.js";import"./composite-BXwJLY2p.js";import"./index-Bqfpj0Ej.js";import"./index-DTOWBSwW.js";import"./index-D-bhGtGz.js";import"./useEventCallback-dyRpDIhK.js";import"./SkeletonBar-KfT1mCrA.js";import"./LoadingCell-CbXaSrBE.js";import"./ColumnConfigDialog-BlCGNGQ_.js";import"./DraggableList-CM5Y7MVj.js";import"./search-BMgb5_aJ.js";import"./Input-BPwTrKsb.js";import"./useControlled-BFzsGkd0.js";import"./Button-C9n-JPHB.js";import"./small-cross-DDl_mPr6.js";import"./ActionButton-sQxxk7Mn.js";import"./Checkbox-CZOAd3AB.js";import"./useValueChanged-Z7Be-pzQ.js";import"./CollapsiblePanel-B4rX7D3r.js";import"./MultiColumnSortDialog-D9YNntfk.js";import"./MenuTrigger-H_h16LiM.js";import"./CompositeItem-D_lixxrU.js";import"./ToolbarRootContext-DtF-FbA5.js";import"./getDisabledMountTransitionStyles-CmUtvBkr.js";import"./getPseudoElementBounds-BLuA6Yh1.js";import"./chevron-down-BpdWjY1P.js";import"./index-CzVK5CEn.js";import"./error-BNDEYQ-r.js";import"./BaseCbacBanner-BmN75nkV.js";import"./makeExternalStore-D9cq61Qp.js";import"./Tooltip-CfmWYMwT.js";import"./PopoverPopup-BlQUb6MZ.js";import"./debounce-B0RIZne8.js";import"./useOsdkClient-KsFQc-mA.js";import"./tick-BQpeZs08.js";import"./DropdownField-BaZrA__h.js";import"./isEqual-CQ-BNQDU.js";import"./withOsdkMetrics-Bn6nYcc2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
