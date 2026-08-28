import{j as i}from"./iframe-BZATJdBl.js";import{O as p}from"./object-table--pr_SZMY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dre9Bp0S.js";import"./preload-helper-BVfEAMh5.js";import"./Table-BSYnIaMJ.js";import"./index-BeDf9ptc.js";import"./Dialog-FZKelXwe.js";import"./cross-nok40gDW.js";import"./svgIconContainer-NoIJiYrj.js";import"./useBaseUiId-Z8K4HKfz.js";import"./InternalBackdrop-CYBXQb2P.js";import"./composite-P4bAAMDx.js";import"./index-XwTUwDpB.js";import"./index-CoEA7CVQ.js";import"./index-C59TsRZT.js";import"./useEventCallback-CUrsDJxK.js";import"./SkeletonBar-9B_vAWDx.js";import"./LoadingCell-DuUkJxz0.js";import"./ColumnConfigDialog-D6vMbmg7.js";import"./DraggableList-COPo4Mt-.js";import"./search-BVSZkFup.js";import"./Input-DEFEDUlG.js";import"./useControlled-CxH-Pm8q.js";import"./Button-NS3-hSgq.js";import"./small-cross-BXlzLQWB.js";import"./ActionButton-l5xHGsjV.js";import"./Checkbox-CTpOLrND.js";import"./useValueChanged-7MvwWlc1.js";import"./CollapsiblePanel-mfZGtD1p.js";import"./MultiColumnSortDialog-BbQi3aFj.js";import"./MenuTrigger-DK5e9JTM.js";import"./CompositeItem-CaX5c1ho.js";import"./ToolbarRootContext-CQ2TQyf5.js";import"./getDisabledMountTransitionStyles-DuQrfMvW.js";import"./getPseudoElementBounds-CtjWpK6C.js";import"./chevron-down-CrGAJBeU.js";import"./index-CmoMq8YN.js";import"./error-p84hxrGR.js";import"./BaseCbacBanner-DVjXQZ88.js";import"./makeExternalStore-DwSzgSOC.js";import"./Tooltip-BjgP057t.js";import"./PopoverPopup-CEXobH7N.js";import"./debounce-DDZCEkLF.js";import"./useOsdkClient-CGBvXPC0.js";import"./tick-B46Qzoeg.js";import"./DropdownField-DH9_Dn7d.js";import"./isEqual-DDkLnefP.js";import"./withOsdkMetrics-DkVKm51c.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
