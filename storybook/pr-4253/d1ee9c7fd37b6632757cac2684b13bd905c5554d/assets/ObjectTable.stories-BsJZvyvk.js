import{j as i}from"./iframe-C7u8teZW.js";import{O as p}from"./object-table-CyvMeLHX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BtdK8QRI.js";import"./preload-helper-BksW-fLa.js";import"./Table-CDMydSky.js";import"./index-BhN64Vkr.js";import"./Dialog-DE1Pcah0.js";import"./cross-DxUgqzoH.js";import"./svgIconContainer-BCJkHoyI.js";import"./useBaseUiId-DhUQmONl.js";import"./InternalBackdrop-CiuI9iXh.js";import"./composite-zfEBFY2E.js";import"./index-ClHt_xjm.js";import"./index-B0vLTinM.js";import"./index-BfFTxu65.js";import"./useEventCallback-BFNSOXZ0.js";import"./SkeletonBar-Cx2TnRLV.js";import"./LoadingCell-CfumBpKG.js";import"./ColumnConfigDialog-CuV0HQkQ.js";import"./DraggableList-BBkY3ia_.js";import"./search-D1b21RXS.js";import"./Input-CkX7hrVd.js";import"./useControlled-wz_zz6UQ.js";import"./Button-ItUG0RJE.js";import"./small-cross-BXAWZBeP.js";import"./ActionButton-hbhMcRNO.js";import"./Checkbox-CJT7DI4o.js";import"./useValueChanged-BeaCU65z.js";import"./CollapsiblePanel-GTw3JwtT.js";import"./MultiColumnSortDialog-CfXR7DTa.js";import"./MenuTrigger-eEIm7O2K.js";import"./CompositeItem-DBCCEsi2.js";import"./ToolbarRootContext-CtUE7M4a.js";import"./getDisabledMountTransitionStyles-NTCPfN1w.js";import"./getPseudoElementBounds-CERtdroa.js";import"./chevron-down-CkA7RfLP.js";import"./index-CWtS_zs6.js";import"./error-CEH3koMg.js";import"./BaseCbacBanner-D-xiZ6RB.js";import"./makeExternalStore-MBK88X8R.js";import"./Tooltip-CMWksZUd.js";import"./PopoverPopup-20OsJ-7t.js";import"./debounce-CiptvIy5.js";import"./useOsdkClient-C3xSadaC.js";import"./tick-yfLFJlQJ.js";import"./DropdownField-C_ts6lDO.js";import"./isEqual-BH4pI4eI.js";import"./withOsdkMetrics-GebS3Gu5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
