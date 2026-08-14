import{j as i}from"./iframe-Dg0RA47C.js";import{O as p}from"./object-table-Ch_8JgH_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cfe7hG7p.js";import"./preload-helper-C2cTZMmE.js";import"./Table-BtRGV6ru.js";import"./index-CP0v3oc4.js";import"./Dialog-Bg9UgGZY.js";import"./cross-CAoQgAes.js";import"./svgIconContainer-MFwXKo8a.js";import"./useBaseUiId-cAnpWjx3.js";import"./InternalBackdrop-CNYdc8fE.js";import"./composite-BCKGU-V6.js";import"./index-BWQjYTbn.js";import"./index-Bs4XxOPg.js";import"./index-BPZvYme6.js";import"./useEventCallback-CdoEXUNW.js";import"./SkeletonBar-DCV28cXp.js";import"./LoadingCell-CIfY_GiG.js";import"./ColumnConfigDialog-Nrle8fdX.js";import"./DraggableList-CLg9nbKr.js";import"./search-D2EDy9ee.js";import"./Input-CFaw-jkU.js";import"./useControlled-BIwik4nh.js";import"./Button-C34VLXt7.js";import"./small-cross-DIALysvM.js";import"./ActionButton-DZ0__bGy.js";import"./Checkbox-DL79bvRy.js";import"./useValueChanged-DuBO4zjF.js";import"./CollapsiblePanel-LAaM01Kd.js";import"./MultiColumnSortDialog-BnOVVE1O.js";import"./MenuTrigger-Di-taYBD.js";import"./CompositeItem-BNj1W7kt.js";import"./ToolbarRootContext-vZD2WDzJ.js";import"./getDisabledMountTransitionStyles-DHm_dR8N.js";import"./getPseudoElementBounds-tHI-ecWk.js";import"./chevron-down-Cbs30_CT.js";import"./index-hS7TW2Ac.js";import"./error-BL9dqZOx.js";import"./BaseCbacBanner-D7QVun9Q.js";import"./makeExternalStore-D8EkG36v.js";import"./Tooltip-CAu-WbGU.js";import"./PopoverPopup-BH-V_4IA.js";import"./debounce-DSxzzjdA.js";import"./useOsdkClient-CcJxi233.js";import"./tick-B0YgN-Jb.js";import"./DropdownField-DWLgtaf3.js";import"./isEqual-DMtrq5mO.js";import"./withOsdkMetrics-D5C1Gkqy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
