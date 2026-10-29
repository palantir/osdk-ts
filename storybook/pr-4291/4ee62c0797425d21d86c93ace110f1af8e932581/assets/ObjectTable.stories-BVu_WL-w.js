import{j as i}from"./iframe-CrKPlwEU.js";import{O as p}from"./object-table-CvR6OxpR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-_T2psJzS.js";import"./preload-helper-haeFzdUn.js";import"./Table-DgE5klJe.js";import"./index-CpV23X_V.js";import"./Dialog-D19FsKBo.js";import"./cross-BOaN4EGV.js";import"./svgIconContainer-DeM85DcU.js";import"./useBaseUiId-3D9LSptD.js";import"./InternalBackdrop-CANy3XAr.js";import"./composite-chiYjW3e.js";import"./index-CuiFjKJ6.js";import"./index-Tf0Q6mNY.js";import"./index-FzYKWb4a.js";import"./useEventCallback-CrnEc3ig.js";import"./SkeletonBar-DHBToYCm.js";import"./LoadingCell-CEYS61L0.js";import"./ColumnConfigDialog-BRK66Wau.js";import"./DraggableList-DYCS6jmS.js";import"./search-Djn1cGPu.js";import"./Input-D5pWgixZ.js";import"./useControlled-BeRVPSrG.js";import"./Button-C2XUaQth.js";import"./small-cross-CeyGDtbC.js";import"./ActionButton-Dk7pYVbj.js";import"./Checkbox-DddYpv7L.js";import"./useValueChanged-B9MjiZal.js";import"./CollapsiblePanel-CkSGM0Jv.js";import"./MultiColumnSortDialog-9ZoqMut-.js";import"./MenuTrigger-BExeNii_.js";import"./CompositeItem-CWEcL4Np.js";import"./ToolbarRootContext-CqOU07W6.js";import"./getDisabledMountTransitionStyles-DT-8seTh.js";import"./getPseudoElementBounds-Bvl6KZtn.js";import"./chevron-down-B-Yd5sHs.js";import"./index-Dr_M4lxK.js";import"./error-DbcL_3Bp.js";import"./BaseCbacBanner-BTtW5FAV.js";import"./makeExternalStore-Drk2huTh.js";import"./Tooltip-C4p1lLDJ.js";import"./PopoverPopup-Ce9yvUeR.js";import"./debounce-l8Bh5wEB.js";import"./useOsdkClient-TsA83w7k.js";import"./tick-Ciq_5nwQ.js";import"./DropdownField-CU7FI4gK.js";import"./isEqual-C8BY78Y6.js";import"./withOsdkMetrics-CM1wTx4W.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
