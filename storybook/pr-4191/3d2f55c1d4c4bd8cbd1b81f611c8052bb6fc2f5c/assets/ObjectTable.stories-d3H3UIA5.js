import{j as i}from"./iframe-B1-dVNhS.js";import{O as p}from"./object-table-uYmiqrJw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_NUwFg8.js";import"./preload-helper-C2ProuBv.js";import"./Table-DCX1dool.js";import"./index-WzbH8_Sp.js";import"./Dialog-CcYcAsyi.js";import"./cross-DSyUk5jg.js";import"./svgIconContainer-wdLWihrJ.js";import"./useBaseUiId-B6R5LUY3.js";import"./InternalBackdrop-BOiIRLua.js";import"./composite-GFxhGtPY.js";import"./index-Dh-RbIId.js";import"./index-E0TiBTDQ.js";import"./index-xcHgmafl.js";import"./useEventCallback-B1rXS-nA.js";import"./SkeletonBar-BhH-zFkC.js";import"./LoadingCell-DCoKmcMd.js";import"./ColumnConfigDialog-ChPHNMhu.js";import"./DraggableList-C7uNSywG.js";import"./search-D_Yyj-29.js";import"./Input-DcCcX-hv.js";import"./useControlled-CY-lWJZk.js";import"./Button-B1lo8D22.js";import"./small-cross-BbKGzC12.js";import"./ActionButton-DYfOCnDA.js";import"./Checkbox-DHvhHlPX.js";import"./useValueChanged-DJpQ9JpS.js";import"./CollapsiblePanel-C7cdbtZi.js";import"./MultiColumnSortDialog-BrkvTRbF.js";import"./MenuTrigger-ysqRk_bn.js";import"./CompositeItem-BkBiNRQD.js";import"./ToolbarRootContext-1bs6h0vw.js";import"./getDisabledMountTransitionStyles-Ekj_ahAn.js";import"./getPseudoElementBounds-CdXmde03.js";import"./chevron-down-DucaWjk_.js";import"./index-C7eChUSe.js";import"./error-mrqVIVBz.js";import"./BaseCbacBanner-CQf5ghEo.js";import"./makeExternalStore-WUBDRAE1.js";import"./Tooltip-DTMQ2lEm.js";import"./PopoverPopup-x43Mxd5d.js";import"./debounce-Cr9XR4am.js";import"./useOsdkClient-2-pImquH.js";import"./tick-DdK_sq_c.js";import"./DropdownField-DFuV0D7k.js";import"./isEqual-BQ42eRcw.js";import"./withOsdkMetrics-ijmPCvgt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
