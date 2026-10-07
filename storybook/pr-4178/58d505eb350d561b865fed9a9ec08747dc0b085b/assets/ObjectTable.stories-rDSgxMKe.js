import{j as i}from"./iframe-YBx9KFiE.js";import{O as p}from"./object-table-Dq03DkDp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DgRJNiIL.js";import"./preload-helper-L6jHOpxv.js";import"./Table-opPxxMf4.js";import"./index-CgtaO5QM.js";import"./Dialog-C1I1G7vK.js";import"./cross-C3v-dhLA.js";import"./svgIconContainer-D6iAjNhU.js";import"./useBaseUiId-DlhJsTYI.js";import"./InternalBackdrop-D3r8VljM.js";import"./composite-BJEKXzZu.js";import"./index-B01ATWUm.js";import"./index-CLwqcVa2.js";import"./index-B6YErJ_s.js";import"./useEventCallback-BF1IxF5d.js";import"./SkeletonBar-SWKUARU8.js";import"./LoadingCell-B4A0sPuf.js";import"./ColumnConfigDialog-CAtn3lYZ.js";import"./DraggableList-B4bNW7cQ.js";import"./search-CuFB4Okz.js";import"./Input-YDKKpO0z.js";import"./useControlled-CH_x4H3X.js";import"./Button-CIORHkhd.js";import"./small-cross-DiaL-97l.js";import"./ActionButton-Dr3JNs2L.js";import"./Checkbox-Ck1vqVZ2.js";import"./useValueChanged-BFvWMPKM.js";import"./CollapsiblePanel-BqouLg2L.js";import"./MultiColumnSortDialog-X-RxjhTv.js";import"./MenuTrigger-LUfi-S7s.js";import"./CompositeItem-C9bwnjwV.js";import"./ToolbarRootContext-C-_578ut.js";import"./getDisabledMountTransitionStyles-BSZVA_yI.js";import"./getPseudoElementBounds-CLbdnn0u.js";import"./chevron-down-DfhavGPs.js";import"./index-N3lE_PbF.js";import"./error-CI50fd9w.js";import"./BaseCbacBanner-CjAm35ae.js";import"./makeExternalStore-Bp5v93FT.js";import"./Tooltip-C_t3RzXT.js";import"./PopoverPopup-BLviECMH.js";import"./debounce-B6PzjAEI.js";import"./useOsdkClient-DDS_VkM8.js";import"./tick-o0shge2a.js";import"./DropdownField-BmpXUboA.js";import"./isEqual-BHpWUGWR.js";import"./withOsdkMetrics-BU_fIGZP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
