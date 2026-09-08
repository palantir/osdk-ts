import{j as i}from"./iframe-DmKkedGZ.js";import{O as p}from"./object-table-DUMEO3IQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-IURRGsFb.js";import"./preload-helper-V3mfUD4w.js";import"./Table-CxneBsde.js";import"./index-5w_QhudL.js";import"./Dialog-DJiUSiQQ.js";import"./cross-CpmvhUuW.js";import"./svgIconContainer-DvNCuvEs.js";import"./useBaseUiId-DNfqz0_E.js";import"./InternalBackdrop-D7bVfifz.js";import"./composite-COYZrTxF.js";import"./index-CPiWOVlX.js";import"./index-CNJ8NeHE.js";import"./index-D9KyFoqb.js";import"./useEventCallback-CsLxej8y.js";import"./SkeletonBar-fZ5yiNKx.js";import"./LoadingCell-rPKZhNTr.js";import"./ColumnConfigDialog-DG0GJbFJ.js";import"./DraggableList-BH8H84LN.js";import"./search-xXbvdTMv.js";import"./Input-jwVhWV6R.js";import"./useControlled-DU4z2hem.js";import"./Button-D6JtrfeD.js";import"./small-cross-DvlEqh4P.js";import"./ActionButton-Co1jb0ag.js";import"./Checkbox-CdOwsFry.js";import"./useValueChanged-LDpI-6kA.js";import"./CollapsiblePanel-Boi6zITp.js";import"./MultiColumnSortDialog-BR6lWZGS.js";import"./MenuTrigger-D_YKNDey.js";import"./CompositeItem-D1JLw8xz.js";import"./ToolbarRootContext-DEQXnygN.js";import"./getDisabledMountTransitionStyles-DNkc-xRC.js";import"./getPseudoElementBounds-CijrryJg.js";import"./chevron-down-BfRThbY_.js";import"./index-C25z4X6E.js";import"./error-ByC5dNyY.js";import"./BaseCbacBanner-DTd0cvGG.js";import"./makeExternalStore-EEoAsRvH.js";import"./Tooltip-C62L9zHh.js";import"./PopoverPopup-Bb1qebqW.js";import"./debounce-BZWL05Yy.js";import"./useOsdkClient-BXLUOpZn.js";import"./tick-Ehn2MHYk.js";import"./DropdownField-NmOMpXPV.js";import"./isEqual-CFNDpXJ9.js";import"./withOsdkMetrics-Benbq0c_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
