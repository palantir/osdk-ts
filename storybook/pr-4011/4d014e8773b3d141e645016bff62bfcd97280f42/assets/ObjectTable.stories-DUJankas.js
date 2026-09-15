import{j as i}from"./iframe-UsJOy75R.js";import{O as p}from"./object-table-DfGlC2U4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_CVwaf9.js";import"./preload-helper-BMFhjcbd.js";import"./Table-t1Qpgusu.js";import"./index-LJeXjTdh.js";import"./Dialog-BEQy-MMo.js";import"./cross-BFteWzwf.js";import"./svgIconContainer-fImKWsr3.js";import"./useBaseUiId-BrB63-GA.js";import"./InternalBackdrop-BvLkiF1F.js";import"./composite-C9sM39C4.js";import"./index-B6uoE1g4.js";import"./index-_ScyNYUM.js";import"./index-BiyqCy7k.js";import"./useEventCallback-4YDJMtg5.js";import"./SkeletonBar-6HxN9bQ-.js";import"./LoadingCell-CclmtLk1.js";import"./ColumnConfigDialog-DnFW9xYC.js";import"./DraggableList-CCrQnUpT.js";import"./search-Ch0geOF0.js";import"./Input-CtUjoKBa.js";import"./useControlled-CUgFibpX.js";import"./Button-D7E7FwX5.js";import"./small-cross-BOpZ-6OG.js";import"./ActionButton-B_I8L5VG.js";import"./Checkbox-DYapDyGT.js";import"./useValueChanged-DElP9LhV.js";import"./CollapsiblePanel-BWwXPV-O.js";import"./MultiColumnSortDialog-DIyR453J.js";import"./MenuTrigger-BLBgkFH1.js";import"./CompositeItem-CtPMwd_g.js";import"./ToolbarRootContext-Ch0u-hZt.js";import"./getDisabledMountTransitionStyles-CVQ-Uwt_.js";import"./getPseudoElementBounds-CEd1PQdU.js";import"./chevron-down-B8hI3iSa.js";import"./index-RoLHKfsw.js";import"./error-DSrMae8G.js";import"./BaseCbacBanner-DQMQBEwH.js";import"./makeExternalStore-CrvnmPw1.js";import"./Tooltip-DfMLTWhn.js";import"./PopoverPopup-DEnJfeh4.js";import"./debounce-C05jCoTa.js";import"./useOsdkClient-B4gpQY7o.js";import"./tick-Bgtx0_Fg.js";import"./DropdownField-hxgGPfNJ.js";import"./isEqual-Dbo3xsh8.js";import"./withOsdkMetrics-Dxoj52t7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
