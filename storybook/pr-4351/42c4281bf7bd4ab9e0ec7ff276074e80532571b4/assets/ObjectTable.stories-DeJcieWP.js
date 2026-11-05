import{j as i}from"./iframe-5l1aTQWB.js";import{O as p}from"./object-table-DCJbpV5Z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-uRLXOn76.js";import"./preload-helper-CV54w-MR.js";import"./Table-C0wRTyVx.js";import"./index-CabVKWfS.js";import"./Dialog-CtVtzfGi.js";import"./cross-DVFwGI58.js";import"./svgIconContainer-DUWwpavS.js";import"./useBaseUiId-D2qSGviR.js";import"./InternalBackdrop-DeDePDLT.js";import"./composite-BN-nzUC2.js";import"./index-CWUPxEVH.js";import"./index-U5dtIGUV.js";import"./index-BEY7C58E.js";import"./useEventCallback-j88OK98j.js";import"./SkeletonBar-DiikPYcf.js";import"./LoadingCell-BFYv-WM9.js";import"./ColumnConfigDialog-Ck03PSW2.js";import"./DraggableList-Dkk5QDNO.js";import"./search-ocH4sH9r.js";import"./Input-DVZngs_7.js";import"./useControlled-Dv35mSy4.js";import"./Button-BbI-ZrrT.js";import"./small-cross-BXD20tqW.js";import"./ActionButton-CVgbfgT7.js";import"./Checkbox-DE6eRYi2.js";import"./useValueChanged-BrsMGCOc.js";import"./CollapsiblePanel-DnkZmCML.js";import"./MultiColumnSortDialog-DYr3NZ_x.js";import"./MenuTrigger-C6uan-J9.js";import"./CompositeItem-CiQq9b_9.js";import"./ToolbarRootContext-DpNaqsW8.js";import"./getDisabledMountTransitionStyles-Ci8kZ5Aj.js";import"./getPseudoElementBounds-By38X9zr.js";import"./chevron-down-C-oTZ5aG.js";import"./index-BKm5H3zL.js";import"./error-Cor_ktfQ.js";import"./BaseCbacBanner-pfccwWJ8.js";import"./makeExternalStore-Bp08F5QN.js";import"./Tooltip-CMn9P59Q.js";import"./PopoverPopup-qOi5AuS_.js";import"./debounce-BirimW28.js";import"./useOsdkClient-DcsBDEeF.js";import"./tick-PuqFX_ts.js";import"./DropdownField-B8Mkz462.js";import"./isEqual-BijnOwND.js";import"./withOsdkMetrics-B5w28mdE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
