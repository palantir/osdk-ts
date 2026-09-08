import{j as i}from"./iframe-BOYcc0dJ.js";import{O as p}from"./object-table-DNOgP_yp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DrDufXEx.js";import"./preload-helper-BnWf8j3v.js";import"./Table-BPr2wWW7.js";import"./index-Yg2EcgVZ.js";import"./Dialog-uqbm0xGp.js";import"./cross-M1Qm_DTM.js";import"./svgIconContainer-dI8qqoMC.js";import"./useBaseUiId-DX9ZiXGI.js";import"./InternalBackdrop-BY0lRnfR.js";import"./composite-D8na-rSh.js";import"./index-BkqK32VC.js";import"./index-CCBfJ9eW.js";import"./index-C7Thu-2O.js";import"./useEventCallback-BVAeoTDg.js";import"./SkeletonBar-DqbjZsF-.js";import"./LoadingCell-DTpk0hTa.js";import"./ColumnConfigDialog-BVTIv4zw.js";import"./DraggableList-C30YVydB.js";import"./search-BW9zSgLT.js";import"./Input-BJWiKc9C.js";import"./useControlled-D-ZDbicW.js";import"./Button-hF353HMT.js";import"./small-cross-CF-XSTuz.js";import"./ActionButton-BfTy6GeE.js";import"./Checkbox-CGB2f6cn.js";import"./useValueChanged-h230bsbd.js";import"./CollapsiblePanel-Sxqk5N-n.js";import"./MultiColumnSortDialog-BEP6YjUS.js";import"./MenuTrigger-BpWk4Win.js";import"./CompositeItem-Bx5eT0s8.js";import"./ToolbarRootContext-Do3BrLln.js";import"./getDisabledMountTransitionStyles-BbJt8_w5.js";import"./getPseudoElementBounds-DV4HYuIT.js";import"./chevron-down-DcL5hgyv.js";import"./index-BDkH7Rg4.js";import"./error-JJ7_ntNs.js";import"./BaseCbacBanner-DDh3O6m0.js";import"./makeExternalStore-Cl0TwftQ.js";import"./Tooltip-ERPEKtIR.js";import"./PopoverPopup-PDZ-29T5.js";import"./debounce-BmvCkScQ.js";import"./useOsdkClient-ByhMOOB7.js";import"./tick-DMFuzZwx.js";import"./DropdownField-BBsngSoK.js";import"./isEqual-ChJ06NMp.js";import"./withOsdkMetrics-BIq6FQjv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
