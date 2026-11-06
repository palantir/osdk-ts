import{j as i}from"./iframe-B1HXhuEn.js";import{O as p}from"./object-table-SyMeuho1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DjeauLlj.js";import"./preload-helper-BS8U_QDO.js";import"./Table-BooO-Bry.js";import"./index-CXhpMXAp.js";import"./Dialog-BxEw-kg6.js";import"./cross-BttX5lBy.js";import"./svgIconContainer-DzUf9ieK.js";import"./useBaseUiId-hdD3ov8Q.js";import"./InternalBackdrop-DKFVVvCs.js";import"./composite-DedIsNbG.js";import"./index-DPC2Y4e5.js";import"./index-3H2Ar6XW.js";import"./index-HdEyMueC.js";import"./useEventCallback-t3hd_q7S.js";import"./SkeletonBar-mpMkjWBx.js";import"./LoadingCell-Bl_SPWgw.js";import"./ColumnConfigDialog-mfVgca5M.js";import"./DraggableList-DgzP1v62.js";import"./search-oaLO-0GK.js";import"./Input-v3aPKgft.js";import"./useControlled-BhBQWUYI.js";import"./Button-C9BX79xl.js";import"./small-cross-CvU0Mbeq.js";import"./ActionButton-DWc1Bu8W.js";import"./Checkbox-BAtzCLv1.js";import"./useValueChanged-xoX0cu1s.js";import"./CollapsiblePanel-Dob9z54l.js";import"./MultiColumnSortDialog-CG9PHst2.js";import"./MenuTrigger-DOQRg6UQ.js";import"./CompositeItem-BMKkQOtg.js";import"./ToolbarRootContext-37rMdX1G.js";import"./getDisabledMountTransitionStyles-eJMFQEJH.js";import"./getPseudoElementBounds-S_dxWTa-.js";import"./chevron-down-D8b4kkiL.js";import"./index-BpBIzBNY.js";import"./error-CgwFWGpg.js";import"./BaseCbacBanner-Cav76U6Z.js";import"./makeExternalStore-eAcHCFEV.js";import"./Tooltip-jSRDry3w.js";import"./PopoverPopup-Bf-4BBva.js";import"./debounce-CfR5LM8L.js";import"./useOsdkClient-BzBnYvs_.js";import"./tick-CNzVeS2N.js";import"./DropdownField-DL5ULeUx.js";import"./isEqual-BUr1T77u.js";import"./withOsdkMetrics-BDRjMbuS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
