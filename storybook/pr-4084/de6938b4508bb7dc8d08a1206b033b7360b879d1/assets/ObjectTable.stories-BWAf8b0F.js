import{j as i}from"./iframe-B60uIzqu.js";import{O as p}from"./object-table-irViTQ2Z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C1ZtF_ag.js";import"./preload-helper-jikZvyDa.js";import"./Table-rwMAeyYG.js";import"./index-BzSV7QsP.js";import"./Dialog-CYLFgbaJ.js";import"./cross-DOsmRzos.js";import"./svgIconContainer-guiuIeqp.js";import"./useBaseUiId-DIJoCSJF.js";import"./InternalBackdrop-CLXaH1Aa.js";import"./composite-FgUpy7wg.js";import"./index-DWJFVWYa.js";import"./index-DHpY-kFP.js";import"./index-5Hq3Nksu.js";import"./useEventCallback-B7QugTUD.js";import"./SkeletonBar-gvdt352_.js";import"./LoadingCell-DDpI3io-.js";import"./ColumnConfigDialog-JA6O3qC4.js";import"./DraggableList-BFsDMiKj.js";import"./search-W61rBGPZ.js";import"./Input-CI489aTx.js";import"./useControlled-DJ00XR1e.js";import"./Button-CwbHglSg.js";import"./small-cross-DmneRbUh.js";import"./ActionButton-BwfVyv5Y.js";import"./Checkbox-DhoHtNZ6.js";import"./useValueChanged-CGySjWpW.js";import"./CollapsiblePanel-CfyaXJrK.js";import"./MultiColumnSortDialog-BrNYeTMv.js";import"./MenuTrigger-C-aCPNIQ.js";import"./CompositeItem-DumPFzxx.js";import"./ToolbarRootContext-DNfnA9up.js";import"./getDisabledMountTransitionStyles-Dva2U48F.js";import"./getPseudoElementBounds-CLV_8asC.js";import"./chevron-down-C_KV3jKU.js";import"./index-CnSFNBSp.js";import"./error-CTvFY39O.js";import"./BaseCbacBanner-CurXy-zS.js";import"./makeExternalStore-D8fqJuwI.js";import"./Tooltip-CU9Zwhnt.js";import"./PopoverPopup-mMeInTnK.js";import"./debounce-Y14coaTK.js";import"./useOsdkClient-C8IrJvuk.js";import"./tick-CFIe4FmU.js";import"./DropdownField-DhWDS7MC.js";import"./isEqual-BaG62FCh.js";import"./withOsdkMetrics-Dg6VzMMR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
