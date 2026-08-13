import{j as i}from"./iframe-dW7ZySVo.js";import{O as p}from"./object-table-DpTS8D6-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BPZsCBIH.js";import"./preload-helper-ietlItcG.js";import"./Table-B9djy5zR.js";import"./index-CyX_mbZv.js";import"./Dialog-DoD6CH3Q.js";import"./cross-BV4X4rJT.js";import"./svgIconContainer-De3VosTd.js";import"./useBaseUiId-CltpoqoE.js";import"./InternalBackdrop-OnfUmyRP.js";import"./composite-yun7E3H0.js";import"./index-NFcKjdXW.js";import"./index-BUDv2oUY.js";import"./index-B9U1zr68.js";import"./useEventCallback-CTf3PETg.js";import"./SkeletonBar-C0qNZ57m.js";import"./LoadingCell-D2Nn0dkn.js";import"./ColumnConfigDialog-BOj2sQSf.js";import"./DraggableList-CjL1Zeyb.js";import"./search-BVLxwhoK.js";import"./Input-BEPGpKmX.js";import"./useControlled--a4EJP-K.js";import"./isEqual-B26u38ta.js";import"./isObject-Bq6JsHLJ.js";import"./Button-BjotpDzx.js";import"./ActionButton-DXVIhKZW.js";import"./Checkbox-BUcGvUET.js";import"./useValueChanged-BNUhKGYr.js";import"./CollapsiblePanel-7EbWsdAY.js";import"./MultiColumnSortDialog-DxbnrFRY.js";import"./MenuTrigger-DpEpaw3t.js";import"./CompositeItem-B9fLtNsk.js";import"./ToolbarRootContext-Cx1oPDzo.js";import"./getDisabledMountTransitionStyles-BJhCKUOQ.js";import"./getPseudoElementBounds-BE0VWDCU.js";import"./chevron-down-D0s0iZJp.js";import"./index-CiitfvmC.js";import"./error-CUjzZGeI.js";import"./BaseCbacBanner-BziABg8b.js";import"./makeExternalStore-p_MVbTGu.js";import"./Tooltip-BdcEiRfO.js";import"./PopoverPopup-B41CZPnS.js";import"./toNumber-boKe2Guz.js";import"./useOsdkClient-D9vq8O0M.js";import"./tick-DhgI4Zis.js";import"./DropdownField-C86F5zQw.js";import"./withOsdkMetrics-CzRWl-u7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
