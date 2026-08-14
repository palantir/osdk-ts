import{j as i}from"./iframe-CMZM34Nm.js";import{O as p}from"./object-table-CQijRIaS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C3cl62YG.js";import"./preload-helper-T_55Ld-4.js";import"./Table-Bf19vEdW.js";import"./index-CPwwZizP.js";import"./Dialog-X0LnPdOw.js";import"./cross-EHESnZVq.js";import"./svgIconContainer-MNS-5CB_.js";import"./useBaseUiId-3LVIhb8Q.js";import"./InternalBackdrop-Dm4BJAYO.js";import"./composite-BLgd2D-S.js";import"./index-DseLBzy9.js";import"./index-DIXzfJRB.js";import"./index-Bzf0HlHB.js";import"./useEventCallback-INnShxMl.js";import"./SkeletonBar-BRFNRxpj.js";import"./LoadingCell-D4PFNC00.js";import"./ColumnConfigDialog-Xy5lhY4M.js";import"./DraggableList-DD2Z18xa.js";import"./search-oY9nbA70.js";import"./Input-CXcmcuOy.js";import"./useControlled-DrBMs-2h.js";import"./Button-ClIIGhQ-.js";import"./small-cross-DEmdrdiv.js";import"./ActionButton-B0HXO6GZ.js";import"./Checkbox-DrBze1bx.js";import"./useValueChanged-BYWxwfrd.js";import"./CollapsiblePanel-CRTElWuv.js";import"./MultiColumnSortDialog-C1j5u-CD.js";import"./MenuTrigger-CShjHQEP.js";import"./CompositeItem-CAkD41ki.js";import"./ToolbarRootContext-Q3-albnw.js";import"./getDisabledMountTransitionStyles-Bs5e3cwu.js";import"./getPseudoElementBounds-C6pmrRxY.js";import"./chevron-down-DGTOO9UD.js";import"./index-EiUiPvzp.js";import"./error-CWU2GFiR.js";import"./BaseCbacBanner-DoCqQT-M.js";import"./makeExternalStore-C8qTazFT.js";import"./Tooltip-Dx6503jt.js";import"./PopoverPopup-BNCKNnCL.js";import"./debounce-BX-4RUA6.js";import"./useOsdkClient-CXoHROa3.js";import"./tick-LLUOl_kc.js";import"./DropdownField-BnX8rzbA.js";import"./isEqual-B7m0Iy2G.js";import"./withOsdkMetrics-DRVxGjiO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
