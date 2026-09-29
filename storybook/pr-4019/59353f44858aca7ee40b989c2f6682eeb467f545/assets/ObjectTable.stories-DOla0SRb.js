import{j as i}from"./iframe-C0TXowYh.js";import{O as p}from"./object-table-CgEVeuv7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-R6CrXCTo.js";import"./preload-helper-DxTxvmk8.js";import"./Table-DJG_r3Xk.js";import"./index-Cu2rgIRW.js";import"./Dialog-vTWvQ72w.js";import"./cross-BfvUUSFN.js";import"./svgIconContainer-C2fAWGrt.js";import"./useBaseUiId-CxGokxTP.js";import"./InternalBackdrop-BG3n3cO9.js";import"./composite-CXmgh9Nc.js";import"./index-u3QGRCwO.js";import"./index-C6Y-pof4.js";import"./index-BU6mBswW.js";import"./useEventCallback-DkQiwOiq.js";import"./SkeletonBar-D0XWEPXE.js";import"./LoadingCell-BIGgOebX.js";import"./ColumnConfigDialog-DmC6LqPv.js";import"./DraggableList-mYeO1b8W.js";import"./search-6re8IEAF.js";import"./Input-8EnzzSA0.js";import"./useControlled-BFSHGlV3.js";import"./Button-D_dg1W6z.js";import"./small-cross-Bc8Y0COB.js";import"./ActionButton-CtkWJ4rU.js";import"./Checkbox-B-Meopae.js";import"./useValueChanged-HDLvanC4.js";import"./CollapsiblePanel-D9qfjPFi.js";import"./MultiColumnSortDialog-BHXvxwMe.js";import"./MenuTrigger-DMgWfOwE.js";import"./CompositeItem-KxsL0x_o.js";import"./ToolbarRootContext-CE5VkmEX.js";import"./getDisabledMountTransitionStyles-D_Zo5NjY.js";import"./getPseudoElementBounds-WqJcoAVH.js";import"./chevron-down-D7WH3ySY.js";import"./index-DWDyv98l.js";import"./error-Z4OH-yWW.js";import"./BaseCbacBanner-6omcgI-g.js";import"./makeExternalStore-C_tJozdQ.js";import"./Tooltip-P9jbmoIC.js";import"./PopoverPopup-CuAJ2y9v.js";import"./debounce-DMyrgWDf.js";import"./useOsdkClient-Dik0BEfs.js";import"./tick-Bc8vz4AB.js";import"./DropdownField-09zuyy2T.js";import"./isEqual-DaFfWolB.js";import"./withOsdkMetrics-BPzAvbiW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
