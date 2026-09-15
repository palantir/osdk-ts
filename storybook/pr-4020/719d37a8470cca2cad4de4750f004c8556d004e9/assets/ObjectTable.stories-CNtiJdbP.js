import{j as i}from"./iframe-B0400XAV.js";import{O as p}from"./object-table-BZ5Kdgrh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D1ytSi7_.js";import"./preload-helper-Bn7pmSUb.js";import"./Table-BALaECP2.js";import"./index-DZ4vxiLW.js";import"./Dialog-SWkd_Wiv.js";import"./cross-DQqnupWk.js";import"./svgIconContainer-JRfXSFeh.js";import"./useBaseUiId-B9k80gJ8.js";import"./InternalBackdrop-DmO0kWzU.js";import"./composite-BH1fXSiW.js";import"./index-C_9Kpq7B.js";import"./index-2o5KGJI0.js";import"./index-Ej3jcQKp.js";import"./useEventCallback-JQnAZWI3.js";import"./SkeletonBar-DJor0eXp.js";import"./LoadingCell-BOFJCCyC.js";import"./ColumnConfigDialog-d3dN9wSL.js";import"./DraggableList-B_mWzcV5.js";import"./search-BeppLusu.js";import"./Input-BRGSYo1e.js";import"./useControlled-DjWHSFCM.js";import"./Button-YA4JYpq1.js";import"./small-cross-ESv-X2fK.js";import"./ActionButton-BrvBwGrb.js";import"./Checkbox-CJMelRTO.js";import"./useValueChanged-BsB5HN0-.js";import"./CollapsiblePanel-B3Zzdgcc.js";import"./MultiColumnSortDialog-BN_ENW3e.js";import"./MenuTrigger-CKvR1G5L.js";import"./CompositeItem-CoJRCpBo.js";import"./ToolbarRootContext--iPu1vj7.js";import"./getDisabledMountTransitionStyles-CGuB9paQ.js";import"./getPseudoElementBounds-DLMLBgRr.js";import"./chevron-down-CEDiPbvm.js";import"./index-C8DuxpD6.js";import"./error-BZwgl63S.js";import"./BaseCbacBanner-BeF2ijdW.js";import"./makeExternalStore-B2IR-Z_q.js";import"./Tooltip-0d-ScaQ8.js";import"./PopoverPopup-1szLhiqM.js";import"./debounce-D1VOMgMZ.js";import"./useOsdkClient-J40VcFnd.js";import"./tick-DHoO3CIv.js";import"./DropdownField-CdBamLDl.js";import"./isEqual-CdJIThGs.js";import"./withOsdkMetrics-CZrqSehW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
