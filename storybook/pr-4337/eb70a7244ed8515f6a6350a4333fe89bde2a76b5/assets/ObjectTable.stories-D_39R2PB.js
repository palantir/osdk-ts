import{j as i}from"./iframe-CmxH_uLC.js";import{O as p}from"./object-table-CRFfPVal.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BRASXbSg.js";import"./preload-helper-BeAOyUTZ.js";import"./Table-C9kra6ek.js";import"./index-DJsCZSKi.js";import"./Dialog-BNKYMGHo.js";import"./cross-CyX8lMkj.js";import"./svgIconContainer-B8tcX66C.js";import"./useBaseUiId-C0ZMCIGl.js";import"./InternalBackdrop-CSQj2QiU.js";import"./composite-XJfPxJ_X.js";import"./index-xj8oWt_u.js";import"./index-YuGlXnUZ.js";import"./index-DI_hkYt2.js";import"./useEventCallback-UxifOB0d.js";import"./SkeletonBar-C1mRvl1J.js";import"./LoadingCell-COrKfPuv.js";import"./ColumnConfigDialog-Chmm0uAt.js";import"./DraggableList-D_zWYVFa.js";import"./search-TlKrCqYm.js";import"./Input-BKp843TN.js";import"./useControlled-Cmxg5Gb3.js";import"./Button-LKCq4LKF.js";import"./small-cross-CkLXIhPX.js";import"./ActionButton-DCJnOZsI.js";import"./Checkbox-Bv4SuPoI.js";import"./useValueChanged-CwV0eJfz.js";import"./CollapsiblePanel--w9tIzOo.js";import"./MultiColumnSortDialog-BWgone-Q.js";import"./MenuTrigger-BIoi-XB2.js";import"./CompositeItem-tCxULoej.js";import"./ToolbarRootContext-D7pkAdai.js";import"./getDisabledMountTransitionStyles-CMPEQ-kf.js";import"./getPseudoElementBounds-lcY7pLtV.js";import"./chevron-down-CyKsjkJ5.js";import"./index-CT0RUWXc.js";import"./error-Dd4yTEqY.js";import"./BaseCbacBanner-DnGU3imV.js";import"./makeExternalStore-BlDQytTU.js";import"./Tooltip-Dgrr9UmS.js";import"./PopoverPopup-DJbVIXOK.js";import"./debounce-uG06-Bnl.js";import"./useOsdkClient-CKlsW0yh.js";import"./tick-BOd_PXKl.js";import"./DropdownField-FhNn2H0Y.js";import"./isEqual-uZqrEjav.js";import"./withOsdkMetrics-087Wob4c.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
