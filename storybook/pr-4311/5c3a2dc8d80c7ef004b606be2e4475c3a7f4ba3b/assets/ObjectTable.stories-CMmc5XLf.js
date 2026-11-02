import{j as i}from"./iframe-Biji2bf1.js";import{O as p}from"./object-table-DUZsbd2A.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-EKfKRRad.js";import"./preload-helper-BnQD_pUs.js";import"./Table-CpIpVsLD.js";import"./index-DfdB1ttn.js";import"./Dialog-B73FG_lW.js";import"./cross-DgO8Y3SG.js";import"./svgIconContainer-CtuHzH_7.js";import"./useBaseUiId-D8agI47X.js";import"./InternalBackdrop-Cur7vZgT.js";import"./composite-DTVuKyBl.js";import"./index-BcRJjTzj.js";import"./index-BBv7G2Gz.js";import"./index-DuyzOau4.js";import"./useEventCallback-BuGz6aEK.js";import"./SkeletonBar-prYHuNvB.js";import"./LoadingCell-BMxleUkf.js";import"./ColumnConfigDialog-BrIv1Rnf.js";import"./DraggableList-CNguQZ2s.js";import"./search-CLwp4qIO.js";import"./Input-Ka8u0CD4.js";import"./useControlled-CvQogkf4.js";import"./Button-B3fK-m0j.js";import"./small-cross-BJ_whcm4.js";import"./ActionButton-D5GVqQ0r.js";import"./Checkbox-Bil92OSh.js";import"./useValueChanged-CgmTK9yE.js";import"./CollapsiblePanel-Q8df4Rvk.js";import"./MultiColumnSortDialog-exGQm7Ht.js";import"./MenuTrigger-DSyx9jXw.js";import"./CompositeItem-D3laoAWw.js";import"./ToolbarRootContext-8ykIWAUV.js";import"./getDisabledMountTransitionStyles-uiKLVkrc.js";import"./getPseudoElementBounds-CuRI4A7q.js";import"./chevron-down-xdyo5QmP.js";import"./index-CwIIM57l.js";import"./error-AacONtzC.js";import"./BaseCbacBanner-BSXqmrpj.js";import"./makeExternalStore-Wt3R0a85.js";import"./Tooltip-Gl-FzrVH.js";import"./PopoverPopup-BgQoU5Ch.js";import"./debounce-CMsRCK9t.js";import"./useOsdkClient-iyUYhFeG.js";import"./tick-B0yPEej0.js";import"./DropdownField-BMpZFA_1.js";import"./isEqual-CbbNTxgy.js";import"./withOsdkMetrics-BRBNDhHT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
