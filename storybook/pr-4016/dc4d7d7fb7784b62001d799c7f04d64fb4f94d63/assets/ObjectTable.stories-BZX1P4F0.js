import{j as i}from"./iframe-jTK2SxfT.js";import{O as p}from"./object-table-DuYdPEbq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D0qT_ItV.js";import"./preload-helper-qQ4kAc2Q.js";import"./Table-CI6bE9BX.js";import"./index-Pz1htbT9.js";import"./Dialog-CxrPO91E.js";import"./cross-DrKqX7p4.js";import"./svgIconContainer-GdUN0nSr.js";import"./useBaseUiId--4cJ9Rmo.js";import"./InternalBackdrop-CqMji1ba.js";import"./composite-iOJ2PvUN.js";import"./index-BMtptVtR.js";import"./index-CSlECQqo.js";import"./index-BIecch-_.js";import"./useEventCallback-BXSFSqbt.js";import"./SkeletonBar-DhQdItRf.js";import"./LoadingCell-C_9TppnX.js";import"./ColumnConfigDialog-BYyn2yAH.js";import"./DraggableList-CocgqlAW.js";import"./search-DswSvB8a.js";import"./Input-C57k62_6.js";import"./useControlled-qZTm53K2.js";import"./Button-DS-hfsg1.js";import"./small-cross-dkyGS67d.js";import"./ActionButton-DQzcN8W-.js";import"./Checkbox-CAINAHVp.js";import"./useValueChanged-BPMD3jVI.js";import"./CollapsiblePanel-XMUuL-v2.js";import"./MultiColumnSortDialog-CGjau2t9.js";import"./MenuTrigger-DP_-62i6.js";import"./CompositeItem-Cq-oGUuG.js";import"./ToolbarRootContext-Cq-6mE15.js";import"./getDisabledMountTransitionStyles-D6i264P_.js";import"./getPseudoElementBounds-DVNAWduU.js";import"./chevron-down-B-85uVWr.js";import"./index-DyHfw1UB.js";import"./error-BtNAl0M5.js";import"./BaseCbacBanner-DyeqWZGP.js";import"./makeExternalStore-Cfa2Qg1q.js";import"./Tooltip-BbpwuXGl.js";import"./PopoverPopup-BLKdDIb7.js";import"./debounce-DtxvrnBI.js";import"./useOsdkClient-CQTQjoea.js";import"./tick-jbVXP2LR.js";import"./DropdownField-Bvdotu43.js";import"./isEqual-Duv6Tt10.js";import"./withOsdkMetrics-DXkox581.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
