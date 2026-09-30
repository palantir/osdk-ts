import{j as i}from"./iframe-BP89Z9wn.js";import{O as p}from"./object-table-BwxRsYi9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Doa77VmD.js";import"./preload-helper-CpDXy6ri.js";import"./Table-BkomWwXJ.js";import"./index-7fPc8Pd4.js";import"./Dialog-BW7atylg.js";import"./cross-CseKBkZX.js";import"./svgIconContainer-B-B6fhYH.js";import"./useBaseUiId-BsQB3yjV.js";import"./InternalBackdrop-qHNvDGw-.js";import"./composite-JzO3n_7v.js";import"./index-yCs_Jqs_.js";import"./index-B2q267Hw.js";import"./index-RHMRxRkz.js";import"./useEventCallback-OSRHYtdG.js";import"./SkeletonBar-BVNLCVuA.js";import"./LoadingCell-B9UiRnTQ.js";import"./ColumnConfigDialog-CGzlL1ZB.js";import"./DraggableList-Bx6XvblW.js";import"./search-Ce4dpx9M.js";import"./Input-CurDQ8U3.js";import"./useControlled-DYUiPWJr.js";import"./Button-Bcmb5ML8.js";import"./small-cross-CxfEbA50.js";import"./ActionButton-QrFK0FUf.js";import"./Checkbox-CULg12Wm.js";import"./useValueChanged-SyUpxD-D.js";import"./CollapsiblePanel-C9i8cz4o.js";import"./MultiColumnSortDialog-GPZ6ZQYp.js";import"./MenuTrigger--b10bWzD.js";import"./CompositeItem-BWaumFAX.js";import"./ToolbarRootContext-BM5nRA8f.js";import"./getDisabledMountTransitionStyles-BNgnrYDf.js";import"./getPseudoElementBounds-bsHuPucT.js";import"./chevron-down-CbjEdb4A.js";import"./index-D2KO3R9_.js";import"./error-B9U50q0S.js";import"./BaseCbacBanner-B_kBlNl8.js";import"./makeExternalStore-G7zKBEOt.js";import"./Tooltip-DYmR_CPY.js";import"./PopoverPopup-oOwrFqQx.js";import"./debounce--3v9P4Lb.js";import"./useOsdkClient-BZi6F2zc.js";import"./tick-jzT-KPyz.js";import"./DropdownField-DBILA8E6.js";import"./isEqual-bFioetdV.js";import"./withOsdkMetrics-hOQ5lnvy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
