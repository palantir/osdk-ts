import{j as i}from"./iframe-Cit8dWXp.js";import{O as p}from"./object-table-CLprNm-d.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CNHAzsu3.js";import"./preload-helper-CCWrzc8D.js";import"./Table-BVpt2fUo.js";import"./index-DjKRvWyY.js";import"./Dialog-Be2F3-FV.js";import"./cross-gQNsGHqK.js";import"./svgIconContainer-CnhTjGYI.js";import"./useBaseUiId-DYvasBbv.js";import"./InternalBackdrop-CHY-7UBX.js";import"./composite-BgoZwE_5.js";import"./index-keZnzdM5.js";import"./index-BWFrdUWl.js";import"./index-BVRufQb7.js";import"./useEventCallback-C9HAZCRG.js";import"./SkeletonBar-u4-76qTo.js";import"./LoadingCell-nBjE1ndy.js";import"./ColumnConfigDialog-BWi2X-eS.js";import"./DraggableList-D2uNEbk7.js";import"./search-BOSFG60z.js";import"./Input-D4pO2QO0.js";import"./useControlled-D1zi4BZe.js";import"./isEqual-CFsLy166.js";import"./isObject-DIwas83d.js";import"./Button-Dq2cEP2I.js";import"./ActionButton-4Aw8VsKu.js";import"./Checkbox-DHQAVcVh.js";import"./useValueChanged-nr9Fn3vC.js";import"./CollapsiblePanel-ChQIa99W.js";import"./MultiColumnSortDialog-C2OT4-v6.js";import"./MenuTrigger-uIFIt69N.js";import"./CompositeItem-BbrpyRMV.js";import"./ToolbarRootContext-N4iCvs8E.js";import"./getDisabledMountTransitionStyles-Cs5mf5KU.js";import"./getPseudoElementBounds-BK_ei7WU.js";import"./chevron-down-grDpNC0P.js";import"./index-DTPUrDLg.js";import"./error-CsqJDmzd.js";import"./BaseCbacBanner-BlBv9MrF.js";import"./makeExternalStore-DCWmOVk3.js";import"./Tooltip-DG1w5Z16.js";import"./PopoverPopup-BuX_5jbW.js";import"./toNumber-D-wCb8lw.js";import"./useOsdkClient-stsJawmz.js";import"./tick-Cn-ugVOT.js";import"./DropdownField-X_4V0sjX.js";import"./withOsdkMetrics-DjoWeLgm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
