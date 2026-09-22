import{j as i}from"./iframe-B4Qf2x47.js";import{O as p}from"./object-table-CPLTCgyJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D2l2UJfQ.js";import"./preload-helper-DmaZizbX.js";import"./Table-DcPW7WI2.js";import"./index-B97ocqDB.js";import"./Dialog-De2ibvoK.js";import"./cross-w9xefAeS.js";import"./svgIconContainer-Bx39OoUr.js";import"./useBaseUiId-CuoaS_IK.js";import"./InternalBackdrop-C8l1Y-0f.js";import"./composite-BxeFJGWF.js";import"./index-DHeuY6qT.js";import"./index-B6nqCMvX.js";import"./index-BA03CKcA.js";import"./useEventCallback-DWh8d3_D.js";import"./SkeletonBar-BtuvgBa-.js";import"./LoadingCell-DXNqVRfq.js";import"./ColumnConfigDialog-BZuObZPn.js";import"./DraggableList-CIdOPMJV.js";import"./search-D96kAX6P.js";import"./Input-CT1b0uTH.js";import"./useControlled-CjTdF22S.js";import"./Button-xKEqEHmE.js";import"./small-cross-DS3Q2Rz0.js";import"./ActionButton-zETE6syU.js";import"./Checkbox-COhZNwHi.js";import"./useValueChanged-DsKPkoty.js";import"./CollapsiblePanel-B9o26G0c.js";import"./MultiColumnSortDialog-DC5fGvj7.js";import"./MenuTrigger-exs7SvA9.js";import"./CompositeItem-Dm0AUseO.js";import"./ToolbarRootContext-gq31GD3n.js";import"./getDisabledMountTransitionStyles-CdqBMtts.js";import"./getPseudoElementBounds-F5SYiEpp.js";import"./chevron-down-DNdE9fs0.js";import"./index-COOPd0_C.js";import"./error-0thEM3V8.js";import"./BaseCbacBanner-ncSG64qg.js";import"./makeExternalStore-DYKlPK4M.js";import"./Tooltip-Rk-aR7OJ.js";import"./PopoverPopup-tqPNwfif.js";import"./debounce-DpXq-GLD.js";import"./useOsdkClient-D22Zy3Aq.js";import"./tick-DFcuOcOL.js";import"./DropdownField-D-duYmE0.js";import"./isEqual-Bh4qltOa.js";import"./withOsdkMetrics-CQFCnZa4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
