import{j as i}from"./iframe-ZGCn2odS.js";import{O as p}from"./object-table-65kVujAe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BPmFhtyd.js";import"./preload-helper-BHCQWj8s.js";import"./Table-DJ88caPP.js";import"./index-CJGEKRO7.js";import"./Dialog-BNMNfqMb.js";import"./cross-YMBvsQPC.js";import"./svgIconContainer-DIbGb-SV.js";import"./useBaseUiId-BcKFnlc-.js";import"./InternalBackdrop-GK49McLi.js";import"./composite-DhwjcmOa.js";import"./index-C1SFOp3X.js";import"./index-DI6Iv9sH.js";import"./index-FqvCCkDn.js";import"./useEventCallback-DpDjAOam.js";import"./SkeletonBar-8t2888Rf.js";import"./LoadingCell-yllCbyUI.js";import"./ColumnConfigDialog-fsMZnXZS.js";import"./DraggableList-BeTr9Grg.js";import"./search-BSxa54sW.js";import"./Input-Dz8AuOJD.js";import"./useControlled-BCVu5IOV.js";import"./Button-BDPNYI21.js";import"./small-cross-BniKjSh0.js";import"./ActionButton-C3yeZ1Au.js";import"./Checkbox-aw_MMjVw.js";import"./useValueChanged-CpK0Am2a.js";import"./CollapsiblePanel-C4xCl0yn.js";import"./MultiColumnSortDialog-BOtT3fMs.js";import"./MenuTrigger-CV1o5oXP.js";import"./CompositeItem-Dfs12gOS.js";import"./ToolbarRootContext-DERGfUKY.js";import"./getDisabledMountTransitionStyles-DiyUlUYW.js";import"./getPseudoElementBounds-C_04zlSA.js";import"./chevron-down-B6AtoUz4.js";import"./index-KYd_Sluk.js";import"./error-CFUEkdAJ.js";import"./BaseCbacBanner-BIHQDsQT.js";import"./makeExternalStore-CfgYssbm.js";import"./Tooltip-BIZ4_c9E.js";import"./PopoverPopup-wyULYtii.js";import"./debounce-CCBwI6Yb.js";import"./useOsdkClient-CFyv3ORA.js";import"./tick-Do777ZNN.js";import"./DropdownField-BgzDLEZ2.js";import"./isEqual-DOJUpwKE.js";import"./withOsdkMetrics-BCmHmvai.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
