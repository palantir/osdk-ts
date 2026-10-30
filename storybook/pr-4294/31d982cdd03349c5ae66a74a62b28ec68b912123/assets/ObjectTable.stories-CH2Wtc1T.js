import{j as i}from"./iframe-Br8xONPm.js";import{O as p}from"./object-table-B6lx7_yi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-44K1g0yi.js";import"./preload-helper-DQgVVB6U.js";import"./Table-D_n0BsEc.js";import"./index-B2krqAG0.js";import"./Dialog-Bl3S4dTf.js";import"./cross-DuxFWD_g.js";import"./svgIconContainer-CSQu9ec3.js";import"./useBaseUiId-BZnTNrwC.js";import"./InternalBackdrop-6cvjFa41.js";import"./composite-C9h1Nrh8.js";import"./index-D9czVAyf.js";import"./index-jHhc_U3n.js";import"./index-B-GeqWm0.js";import"./useEventCallback-C7zCd0lh.js";import"./SkeletonBar-PkMTMVi0.js";import"./LoadingCell-BaO-_6dK.js";import"./ColumnConfigDialog-Ba-IH8UZ.js";import"./DraggableList-9FAgnbX5.js";import"./search-DZd-hDvg.js";import"./Input-BHVdEi5Z.js";import"./useControlled-BLiUdu5J.js";import"./Button-CpiJCvHd.js";import"./small-cross-CeJ3wQjx.js";import"./ActionButton-z1YZZnng.js";import"./Checkbox-CQ0zEQKF.js";import"./useValueChanged-Dcm4p7P9.js";import"./CollapsiblePanel-CU3saAtT.js";import"./MultiColumnSortDialog-DXOGAuol.js";import"./MenuTrigger-BZdR-zpx.js";import"./CompositeItem-yj6TyWdn.js";import"./ToolbarRootContext-CI35CvFn.js";import"./getDisabledMountTransitionStyles-C2DvpNtJ.js";import"./getPseudoElementBounds-DYtuX3rf.js";import"./chevron-down-CG3ZsjCs.js";import"./index-6kzQ95ap.js";import"./error-5UgtcFK8.js";import"./BaseCbacBanner-CAzellM6.js";import"./makeExternalStore-N49v7_Hy.js";import"./Tooltip-BMqnNLGs.js";import"./PopoverPopup-CnuFOAXl.js";import"./debounce-B803r_X5.js";import"./useOsdkClient-CY-_x2aU.js";import"./tick-Dsc87XPT.js";import"./DropdownField-ryKhHmHs.js";import"./isEqual-7Eh_qRj1.js";import"./withOsdkMetrics-BaSLlHt7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
