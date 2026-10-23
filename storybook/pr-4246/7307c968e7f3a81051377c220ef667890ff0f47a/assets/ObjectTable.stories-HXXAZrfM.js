import{j as i}from"./iframe-DH1LfSqj.js";import{O as p}from"./object-table-C4--OWMA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B9EjVXWV.js";import"./preload-helper-BtNGdpdU.js";import"./Table-DXNoMCtE.js";import"./index-BwVz3K80.js";import"./Dialog-m6U3BZ2P.js";import"./cross-CVAZ1iFx.js";import"./svgIconContainer-GysfdOnF.js";import"./useBaseUiId-CW3AoQkf.js";import"./InternalBackdrop-DD_xzXOG.js";import"./composite-DB-jEcsY.js";import"./index-Dfpbq9fn.js";import"./index-Dt70WsCn.js";import"./index-BQpuPn_O.js";import"./useEventCallback-B1T6-Dk0.js";import"./SkeletonBar-Blb2KjQc.js";import"./LoadingCell-DJ166qfC.js";import"./ColumnConfigDialog-Dppaw2Lr.js";import"./DraggableList-DfK_4q05.js";import"./search-Cf7xLzNe.js";import"./Input-BbVzkVzZ.js";import"./useControlled-DAJs0K9A.js";import"./Button-CC_D7kUc.js";import"./small-cross-AKv-8hHD.js";import"./ActionButton-DAhEk0oH.js";import"./Checkbox-CJ_ikFlF.js";import"./useValueChanged-D1k7g2Vp.js";import"./CollapsiblePanel-CGVC2bAM.js";import"./MultiColumnSortDialog-DqDhlwJe.js";import"./MenuTrigger-D2rZbEGn.js";import"./CompositeItem-ty0jR14S.js";import"./ToolbarRootContext-DNwYbqk6.js";import"./getDisabledMountTransitionStyles-Dwh5nb5R.js";import"./getPseudoElementBounds-DTVu78U6.js";import"./chevron-down-BcIj0xVN.js";import"./index-BAF1QDd0.js";import"./error-CvpqdC3I.js";import"./BaseCbacBanner-CARa9_yI.js";import"./makeExternalStore-fduFP-zO.js";import"./Tooltip-CZY4h-1t.js";import"./PopoverPopup-C1WEOJ_A.js";import"./debounce-B4GI_Apd.js";import"./useOsdkClient-DN4s-WbE.js";import"./tick-BIbnl7xY.js";import"./DropdownField-C9gy_Wgf.js";import"./isEqual-DdMqeQ25.js";import"./withOsdkMetrics-CkK0GNNa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
