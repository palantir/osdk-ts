import{j as i}from"./iframe-7HWn_vJ6.js";import{O as p}from"./object-table-DHE2g8y9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DHffoIfB.js";import"./preload-helper-CpsRumFb.js";import"./Table-4OL8Tp08.js";import"./index-5DesS_Rq.js";import"./Dialog-CZ0W4pD7.js";import"./cross-C8-Xg2zC.js";import"./svgIconContainer-BUuMEAEF.js";import"./useBaseUiId-D5qCaBNi.js";import"./InternalBackdrop-B2v5oIKt.js";import"./composite-ChQikCZ2.js";import"./index-DLnS53Ac.js";import"./index-BAmY44lm.js";import"./index-DF7uRqTx.js";import"./useEventCallback-ryzmtcNX.js";import"./SkeletonBar-qrzgh7UB.js";import"./LoadingCell-DGMJaHaJ.js";import"./ColumnConfigDialog-w9j1DtuC.js";import"./DraggableList-yHnqlwe6.js";import"./search-Dz3e9e6H.js";import"./Input-BXvi8BCl.js";import"./useControlled-xbXmF4gL.js";import"./isEqual-CPugSMux.js";import"./isObject-CoiIKRmS.js";import"./Button-C0yxmCxc.js";import"./ActionButton-Pcn-fiWH.js";import"./Checkbox-DcqH3aQ5.js";import"./useValueChanged-D7Wxsqao.js";import"./CollapsiblePanel-yoJjUAZc.js";import"./MultiColumnSortDialog-B13w_HeV.js";import"./MenuTrigger-BnROxh8m.js";import"./CompositeItem-D-vYIAXB.js";import"./ToolbarRootContext-DEobcuEs.js";import"./getDisabledMountTransitionStyles-DPsFnI3a.js";import"./getPseudoElementBounds-CcjlVVRK.js";import"./chevron-down-CjvcWCP0.js";import"./index-DUwSofpg.js";import"./error-OJDEKHve.js";import"./BaseCbacBanner-Cywdd0P9.js";import"./makeExternalStore-D7BGvXpe.js";import"./Tooltip-U_pT3p1z.js";import"./PopoverPopup-DnsrRHq6.js";import"./toNumber-Bri2bLBz.js";import"./useOsdkClient-DeDD2fFX.js";import"./tick-Da2Yv-xR.js";import"./DropdownField-Cz9_2nsx.js";import"./withOsdkMetrics-CygL5eUE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
