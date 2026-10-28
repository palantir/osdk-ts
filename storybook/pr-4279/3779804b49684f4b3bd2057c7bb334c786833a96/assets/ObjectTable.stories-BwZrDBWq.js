import{j as i}from"./iframe-Cs9u2FNJ.js";import{O as p}from"./object-table-DdFu_d1m.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DzF_sKlU.js";import"./preload-helper-DEnCUJIu.js";import"./Table-xgR2ZNdx.js";import"./index-DWrTTHxb.js";import"./Dialog-DiYfLKt0.js";import"./cross-Jki0Zf7X.js";import"./svgIconContainer-bmBt8PNs.js";import"./useBaseUiId-B04InLuC.js";import"./InternalBackdrop-C4zV0J9w.js";import"./composite-DoMN_SNj.js";import"./index-B9LdyWis.js";import"./index-DSEOcFQR.js";import"./index-BckuHIFJ.js";import"./useEventCallback-BlrYGKuQ.js";import"./SkeletonBar-BfpfarXm.js";import"./LoadingCell-Bpgn57DX.js";import"./ColumnConfigDialog-CVAJC_Y2.js";import"./DraggableList-DOhOUNdv.js";import"./search-QgkUbhew.js";import"./Input-BxHTTwfQ.js";import"./useControlled-DWa2oiP8.js";import"./Button-_OIC0QgO.js";import"./small-cross-w_QEugk7.js";import"./ActionButton-DJ3NK00Y.js";import"./Checkbox-MEGJAx5w.js";import"./useValueChanged-CG7ACMRq.js";import"./CollapsiblePanel-DHVkTAOJ.js";import"./MultiColumnSortDialog-B1PY5m02.js";import"./MenuTrigger-Bh7W1M7b.js";import"./CompositeItem-D6sZhCIa.js";import"./ToolbarRootContext-BXn8yWld.js";import"./getDisabledMountTransitionStyles-CdijohRN.js";import"./getPseudoElementBounds-Bbihz1Zu.js";import"./chevron-down-D0MyTtqt.js";import"./index-C2_rmR-A.js";import"./error-92AiuNPh.js";import"./BaseCbacBanner-DZ_8gS-t.js";import"./makeExternalStore-CtNpDvOI.js";import"./Tooltip-DnZtYN8u.js";import"./PopoverPopup-CQEmEDo7.js";import"./debounce-BPwk5KM9.js";import"./useOsdkClient-FerZNXE5.js";import"./tick-B-5PpNSR.js";import"./DropdownField-BnI_unVW.js";import"./isEqual-Bj-z7ObL.js";import"./withOsdkMetrics-BHorCkdK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
