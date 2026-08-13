import{j as i}from"./iframe-KbQIFRGa.js";import{O as p}from"./object-table-A-4UVlPs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DOxmryIC.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DjBvGnlI.js";import"./index-oNQDT3pN.js";import"./Dialog-LTN4yp4-.js";import"./cross-DoOTv_Kw.js";import"./svgIconContainer-sykDQB1x.js";import"./useBaseUiId-C5Z8PN8H.js";import"./InternalBackdrop-hXLK1iL5.js";import"./composite-GGTk9X_4.js";import"./index-D106GrLT.js";import"./index-bW-kSRQs.js";import"./index-dFSZLdFi.js";import"./useEventCallback-n0URW7JS.js";import"./SkeletonBar-I3jGGBun.js";import"./LoadingCell-DC9Ucowt.js";import"./ColumnConfigDialog-C4HjDGjr.js";import"./DraggableList-DiR0P00x.js";import"./search-CWIUc-iX.js";import"./Input-DCRhBd7X.js";import"./useControlled-IL1laNWB.js";import"./Button-DJ-kvAuB.js";import"./small-cross-Bxoh5HWy.js";import"./ActionButton-DtiTD6NE.js";import"./Checkbox-D6Lt66gL.js";import"./useValueChanged-BsapA-Fb.js";import"./CollapsiblePanel-DrC-9h6Q.js";import"./MultiColumnSortDialog-MXCrgjw4.js";import"./MenuTrigger-02eyTE7O.js";import"./CompositeItem-Du9x_QN-.js";import"./ToolbarRootContext-DVI-t-Yd.js";import"./getDisabledMountTransitionStyles-B2mb34X0.js";import"./getPseudoElementBounds-C0gXzrnf.js";import"./chevron-down-sNT3G-Lr.js";import"./index-BwbXqol-.js";import"./error-BfNvRC5H.js";import"./BaseCbacBanner-C1tqFwkR.js";import"./makeExternalStore-CkNn2ki8.js";import"./Tooltip-BFeQnd1L.js";import"./PopoverPopup-yB1fiotD.js";import"./debounce-W5fS1vR_.js";import"./useOsdkClient-C5xzc4Kj.js";import"./tick-CchspkVg.js";import"./DropdownField-BLXTmoIg.js";import"./isEqual-CpUPP3_F.js";import"./withOsdkMetrics-CE7F9eew.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
