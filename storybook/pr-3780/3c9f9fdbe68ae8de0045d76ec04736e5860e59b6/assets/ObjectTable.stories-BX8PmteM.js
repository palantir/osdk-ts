import{j as i}from"./iframe-8l4VgzvN.js";import{O as p}from"./object-table-BYDCS3dp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BTtLZLKD.js";import"./preload-helper-BWMgMhg-.js";import"./Table-BtXRikvm.js";import"./index-CENhKLHr.js";import"./Dialog-7UDuPlvQ.js";import"./cross-B2bEUPP4.js";import"./svgIconContainer-BQL_tfkb.js";import"./useBaseUiId-DUa6Gl7o.js";import"./InternalBackdrop-BYDChCJ5.js";import"./composite-a8JqXKoE.js";import"./index-e67zZ8CW.js";import"./index-ue3NKf6y.js";import"./index-CGcIjaZR.js";import"./useEventCallback-BBSO6LkX.js";import"./SkeletonBar-Cb6FypxV.js";import"./LoadingCell-Cb2SpVHN.js";import"./ColumnConfigDialog-7R66Lh7L.js";import"./DraggableList-BXrBLydx.js";import"./search-Bd8us1xK.js";import"./Input-CdaK_hcH.js";import"./useControlled-D-2KZgoS.js";import"./isEqual-Di3NOZUo.js";import"./isObject-Bswa1wAC.js";import"./Button-aIlHQ8yg.js";import"./ActionButton-C_uBNnQ3.js";import"./Checkbox-CjIu4B-7.js";import"./useValueChanged-Zk553mpV.js";import"./CollapsiblePanel-DqyaDfuX.js";import"./MultiColumnSortDialog-BTeLTlUO.js";import"./MenuTrigger-CsMLDPFG.js";import"./CompositeItem-Db4Osd20.js";import"./ToolbarRootContext-DpqGT7Lo.js";import"./getDisabledMountTransitionStyles-C2NmiCwZ.js";import"./getPseudoElementBounds-CJwQ3ni7.js";import"./chevron-down-DTdeumy4.js";import"./index-CqpjD42R.js";import"./error-B0b_D1P0.js";import"./BaseCbacBanner-uVAZLnwX.js";import"./makeExternalStore-vb2YzOlo.js";import"./Tooltip-DHWPRF-j.js";import"./PopoverPopup-pIzCYtCt.js";import"./toNumber-DKpENdrk.js";import"./useOsdkClient-_FMDwwtZ.js";import"./tick-rt-IJVvT.js";import"./DropdownField-PUakMDKl.js";import"./withOsdkMetrics-BlRozGsn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
