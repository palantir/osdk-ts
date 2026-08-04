import{j as i}from"./iframe-Dj3y_FXz.js";import{O as p}from"./object-table-ChC7y-am.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BAEwpldl.js";import"./preload-helper-D41TUqQK.js";import"./Table-Ch4GzdGc.js";import"./index-DD6p90gq.js";import"./Dialog-CpIUcxp0.js";import"./cross-CVdfkFqF.js";import"./svgIconContainer-D_6_keQ1.js";import"./useBaseUiId-D8RgwyAn.js";import"./InternalBackdrop-5z-sgEQM.js";import"./composite-DnSqe8X8.js";import"./index-CxKUFA2E.js";import"./index-18fnm7EA.js";import"./index-Q6m8Uz6B.js";import"./useEventCallback-D-hkdMR7.js";import"./SkeletonBar-QvTedd7J.js";import"./LoadingCell-CqaEpvLp.js";import"./ColumnConfigDialog-BtPXF6DA.js";import"./DraggableList-DiO9-yFi.js";import"./search-DqELWH10.js";import"./Input-C00XXgL_.js";import"./useControlled-CogZz_Fp.js";import"./isEqual-CgnQk9cA.js";import"./isObject-DltkD9gV.js";import"./Button-Dz0Fa_jz.js";import"./ActionButton-gTd9NfDq.js";import"./Checkbox-DXtG2TSz.js";import"./useValueChanged-3KFnokUh.js";import"./CollapsiblePanel-dWVFulUf.js";import"./MultiColumnSortDialog-CKLVs871.js";import"./MenuTrigger-DrqvZa_k.js";import"./CompositeItem-DERML8IO.js";import"./ToolbarRootContext-BWQ69sPa.js";import"./getDisabledMountTransitionStyles-CD2MoVvb.js";import"./getPseudoElementBounds-DYGqIPmF.js";import"./chevron-down-vDvBpfK_.js";import"./index-hy5cmm3j.js";import"./error-a0jqZXnu.js";import"./BaseCbacBanner-CFb6v-Yr.js";import"./makeExternalStore-CoHw-zti.js";import"./Tooltip-CVzFy9Xe.js";import"./PopoverPopup-CWhtGTWR.js";import"./toNumber-B_tOvU6S.js";import"./useOsdkClient-K6JAw32y.js";import"./tick-CIMNouXh.js";import"./DropdownField-B4klekJb.js";import"./withOsdkMetrics-FM_wpNGl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
