import{j as i}from"./iframe-B-HGqiQv.js";import{O as p}from"./object-table-DjgF1tRq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C4Dy4tg3.js";import"./preload-helper-f0nf4odL.js";import"./Table-aLeOrhVV.js";import"./index-bxDwllqb.js";import"./Dialog-BXnFsicd.js";import"./cross-EGyIlo5-.js";import"./svgIconContainer-CcOwnLsJ.js";import"./useBaseUiId-SjVBW8d9.js";import"./InternalBackdrop-DlbEw6t2.js";import"./composite-Bss2rQnJ.js";import"./index-BtG-qeps.js";import"./index-CEiCEyzQ.js";import"./index-BBOlyUVk.js";import"./useEventCallback-BGTc3NYX.js";import"./SkeletonBar-UZMMR510.js";import"./LoadingCell-DJ3n0fIv.js";import"./ColumnConfigDialog-Dp-hGRoe.js";import"./DraggableList-g0qcX8Py.js";import"./search-2b7SykPm.js";import"./Input-DQz318CF.js";import"./useControlled-DE8TYXcZ.js";import"./Button-DbLRaPaP.js";import"./small-cross-C9MVmrAy.js";import"./ActionButton-De-rrFSH.js";import"./Checkbox-BqMQh58C.js";import"./useValueChanged-Dvg_Ei3T.js";import"./CollapsiblePanel-B8wfbqwT.js";import"./MultiColumnSortDialog-BAHospfi.js";import"./MenuTrigger-BXJXi7iA.js";import"./CompositeItem-BdVijetn.js";import"./ToolbarRootContext-BLNyP9iz.js";import"./getDisabledMountTransitionStyles-C0uD4fg7.js";import"./getPseudoElementBounds-D3A058yI.js";import"./chevron-down-CPXc6U4P.js";import"./index-CdwYncCO.js";import"./error-BZh_GVh6.js";import"./BaseCbacBanner-CwA_rPGO.js";import"./makeExternalStore-Bg6-61eg.js";import"./Tooltip-gNmuZhk6.js";import"./PopoverPopup-c23FdBcy.js";import"./debounce-HM7gHRwB.js";import"./useOsdkClient-DhlHbxDz.js";import"./tick-B70oSR7_.js";import"./DropdownField-CupL-Zrh.js";import"./isEqual-BIqyPK0y.js";import"./withOsdkMetrics-jKzwJRkL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
