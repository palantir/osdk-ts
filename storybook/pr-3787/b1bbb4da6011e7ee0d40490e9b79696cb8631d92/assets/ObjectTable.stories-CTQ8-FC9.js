import{j as i}from"./iframe-CJh9y-rw.js";import{O as p}from"./object-table-C23G4pLp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DSKEUmQd.js";import"./preload-helper-BcaQAKqY.js";import"./Table-CLGDkZje.js";import"./index-DFSJOe3q.js";import"./Dialog-Dgwv1NOA.js";import"./cross-DbuClkod.js";import"./svgIconContainer-CDTU2Wn-.js";import"./useBaseUiId-BYib4Tg8.js";import"./InternalBackdrop-DhhhxuZ3.js";import"./composite-BIIW-Cns.js";import"./index-Cp3I7hTp.js";import"./index-D1MO8Pmk.js";import"./index-Bso8sUqq.js";import"./useEventCallback-CC1N7e5d.js";import"./SkeletonBar-j_0Rer0W.js";import"./LoadingCell-Bjb34e01.js";import"./ColumnConfigDialog-DBl2L_qI.js";import"./DraggableList-C4NVG9XE.js";import"./search-D36sC-mM.js";import"./Input-DTBlDEIM.js";import"./useControlled-BX6Qm41u.js";import"./isEqual-c-acSA0M.js";import"./isObject-gMTEHd81.js";import"./Button-pOq1Ru5w.js";import"./ActionButton-K7C8HVS-.js";import"./Checkbox-D5jyR-R4.js";import"./useValueChanged-BWFANPDO.js";import"./CollapsiblePanel-Bh_icGpD.js";import"./MultiColumnSortDialog-B8R7Rg5r.js";import"./MenuTrigger-DYOrVY91.js";import"./CompositeItem-BXWwEeJm.js";import"./ToolbarRootContext-ChBzOUyP.js";import"./getDisabledMountTransitionStyles-UyyK_uov.js";import"./getPseudoElementBounds-DFjN2b6-.js";import"./chevron-down-B-HPR9dr.js";import"./index-BwKul7N-.js";import"./error-D198KRh6.js";import"./BaseCbacBanner-CvwZBzYq.js";import"./makeExternalStore-z8da-F2a.js";import"./Tooltip-B0iIpAf2.js";import"./PopoverPopup-XvPYoG9w.js";import"./toNumber-CZ_5AHTr.js";import"./useOsdkClient-D1vTeJ3D.js";import"./tick-CjIWosgF.js";import"./DropdownField-Q2A9MwZ5.js";import"./withOsdkMetrics-Bja_Ajpu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
