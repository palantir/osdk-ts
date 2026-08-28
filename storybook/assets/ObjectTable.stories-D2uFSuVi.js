import{j as i}from"./iframe-Cksi0ItS.js";import{O as p}from"./object-table-DPjrGFZw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DaNBS3cD.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C-I2JgY0.js";import"./index-4Cg-nFaV.js";import"./Dialog-YMFk7ys3.js";import"./cross-KCH3fUDA.js";import"./svgIconContainer-ugyIC0ZV.js";import"./useBaseUiId-CkaYEHZt.js";import"./InternalBackdrop-ByMWLH71.js";import"./composite-9gDjU4W9.js";import"./index-BLXqe3dF.js";import"./index-BGUbSh7o.js";import"./index-tKuUA6h2.js";import"./useEventCallback-C2_CRwBw.js";import"./SkeletonBar-DyOQJPdt.js";import"./LoadingCell-BaYlmIk1.js";import"./ColumnConfigDialog-C4JpXNTA.js";import"./DraggableList-CPIGyWGR.js";import"./search-CAR5_cMX.js";import"./Input-B1lOZjYh.js";import"./useControlled-DgHn0JqS.js";import"./Button-tLjrLZry.js";import"./small-cross-C4_36oX6.js";import"./ActionButton-iRTMwXlM.js";import"./Checkbox-Qi4pYDt8.js";import"./useValueChanged-hC6f2ZRi.js";import"./CollapsiblePanel-D0cMChIV.js";import"./MultiColumnSortDialog-B9s9dsad.js";import"./MenuTrigger-5x48j7vr.js";import"./CompositeItem-DGPROoar.js";import"./ToolbarRootContext-Br_vAgTK.js";import"./getDisabledMountTransitionStyles-DiStWca4.js";import"./getPseudoElementBounds-6sobnSc7.js";import"./chevron-down-BSLIpQnp.js";import"./index-Cya7fJ6D.js";import"./error-C-0hAT3N.js";import"./BaseCbacBanner-iBguVLxX.js";import"./makeExternalStore-DUwh_7mZ.js";import"./Tooltip-Bo6HRsNU.js";import"./PopoverPopup-B7OLzkIb.js";import"./debounce-4VVcQrZU.js";import"./useOsdkClient-CILic4ch.js";import"./tick-yMG_ar3H.js";import"./DropdownField-6g5GKP5i.js";import"./isEqual-BOe8UnNZ.js";import"./withOsdkMetrics-tZacdIUn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
