import{j as i}from"./iframe-B441qIYR.js";import{O as p}from"./object-table-xMl1DPma.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-xSd-RLQL.js";import"./preload-helper-BQxy24fI.js";import"./Table-DvXQCezG.js";import"./index-CqjhHzve.js";import"./Dialog-BSPszA5B.js";import"./cross-BNrt0aH1.js";import"./svgIconContainer-BSmiGxdz.js";import"./useBaseUiId-CAzOpzCv.js";import"./InternalBackdrop-DmeCQFx1.js";import"./composite-CzbYCu9o.js";import"./index-TqQ_ZGFy.js";import"./index-B-mP9lvr.js";import"./index-CGHV9asT.js";import"./useEventCallback-Dkln44I2.js";import"./SkeletonBar-Cf_A4GXZ.js";import"./LoadingCell-CUD2XvbK.js";import"./ColumnConfigDialog-CdaMXRL_.js";import"./DraggableList-Ckk1H0fj.js";import"./search-DUz8ofCX.js";import"./Input-QLiOOLjz.js";import"./useControlled-CWP741nv.js";import"./Button-DzRMTkim.js";import"./small-cross-DlCMMKuZ.js";import"./ActionButton-C-ago1dj.js";import"./Checkbox-BHSZgzni.js";import"./useValueChanged-CifPK3o3.js";import"./CollapsiblePanel-BFH9uHwC.js";import"./MultiColumnSortDialog-DjBGUDQv.js";import"./MenuTrigger-CWKd6dht.js";import"./CompositeItem-C8CTVhA-.js";import"./ToolbarRootContext-CYvhcckZ.js";import"./getDisabledMountTransitionStyles-BjyDpkoM.js";import"./getPseudoElementBounds-C-3tqagg.js";import"./chevron-down-DNBdHWh5.js";import"./index-UGmLGzC-.js";import"./error-bNXgEpmP.js";import"./BaseCbacBanner-zaU3j8Ri.js";import"./makeExternalStore-D5BQihPb.js";import"./Tooltip-DAmduYRB.js";import"./PopoverPopup-D6B75mLS.js";import"./debounce-D_X6R-CZ.js";import"./useOsdkClient-BsFxQUuE.js";import"./tick-ClXuYj6h.js";import"./DropdownField-DPKco6cz.js";import"./isEqual-BPN4A_it.js";import"./withOsdkMetrics-BIArtGAT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
