import{j as i}from"./iframe-YaQI_dO_.js";import{O as p}from"./object-table-DTMLmX_F.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CAhJq9ZE.js";import"./preload-helper-BJlRXhvO.js";import"./Table-BMCUymSg.js";import"./index-BII9TVsB.js";import"./Dialog-BI0EjcJg.js";import"./cross-CxRmiocS.js";import"./svgIconContainer-DmCuTEF7.js";import"./useBaseUiId-hHgDQcmK.js";import"./InternalBackdrop-DT0fNcd1.js";import"./composite-s68hKVHL.js";import"./index-D8V8l3ab.js";import"./index-CroinZGW.js";import"./index-DJsQUQlC.js";import"./useEventCallback-ie83a-jf.js";import"./SkeletonBar-BqWGbmhz.js";import"./LoadingCell-C-QYXJdr.js";import"./ColumnConfigDialog-CJq4n8G8.js";import"./DraggableList-CU1rhZLa.js";import"./search-Bq1E_0aL.js";import"./Input-Cychji4a.js";import"./useControlled-DsDu70zE.js";import"./isEqual-aF-EIYIf.js";import"./isObject-DNcBX0Dm.js";import"./Button-CKHrXp_-.js";import"./ActionButton-BiOe6h1y.js";import"./Checkbox-Bz9L8TnP.js";import"./useValueChanged-ByAXuwVy.js";import"./CollapsiblePanel-BaYf_xkc.js";import"./MultiColumnSortDialog-xTHqHvBT.js";import"./MenuTrigger-B3xPmUZs.js";import"./CompositeItem-Bdp4KkQW.js";import"./ToolbarRootContext-DnHqnj_P.js";import"./getDisabledMountTransitionStyles-rIVtDLVA.js";import"./getPseudoElementBounds-C_PfG-85.js";import"./chevron-down-_xlutfBF.js";import"./index-pW2uRZ-o.js";import"./error-B-n8pXYz.js";import"./BaseCbacBanner-DsnrhKSU.js";import"./makeExternalStore-A6cpUQ1F.js";import"./Tooltip-BRwjQXXJ.js";import"./PopoverPopup-CP3an7oo.js";import"./toNumber-DBkGiOal.js";import"./useOsdkClient-C4hdQt4q.js";import"./tick-CuXPM17c.js";import"./DropdownField-CGth-Ppv.js";import"./withOsdkMetrics-DuLoxkUu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
