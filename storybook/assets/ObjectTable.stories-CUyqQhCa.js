import{j as i}from"./iframe-_sjFdmAq.js";import{O as p}from"./object-table-CTlxP_R4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dmd9gfMG.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DwltTFWt.js";import"./index-CRSgNIa9.js";import"./Dialog-4qjvqay6.js";import"./cross-Dv72_hpq.js";import"./svgIconContainer-BedeSN7M.js";import"./useBaseUiId-5QpKILIQ.js";import"./InternalBackdrop-BHc5wGPm.js";import"./composite-2nXa2kLb.js";import"./index-DDb5dG4i.js";import"./index-CDG4GXO9.js";import"./index-Cf7hmIbi.js";import"./useEventCallback-Bm7WEFMf.js";import"./SkeletonBar-wAqZwJDd.js";import"./LoadingCell-DKnHsqX6.js";import"./ColumnConfigDialog-CdThEmIS.js";import"./DraggableList-tmCYnujm.js";import"./search-D7Px8uCu.js";import"./Input-CRLxf9hA.js";import"./useControlled-BllABFw_.js";import"./isEqual-COhRFLd0.js";import"./isObject-B4kaZFqd.js";import"./Button-DDufaugh.js";import"./ActionButton-B8HgdDq5.js";import"./Checkbox-D106U2Y1.js";import"./useValueChanged-DOIGpNaa.js";import"./CollapsiblePanel-D5QrO41U.js";import"./MultiColumnSortDialog-Cpkrbr5q.js";import"./MenuTrigger-P33Stl4i.js";import"./CompositeItem-Dabrke8K.js";import"./ToolbarRootContext-bAnsIJ5m.js";import"./getDisabledMountTransitionStyles-Qaq6nV66.js";import"./getPseudoElementBounds-75v4OgTn.js";import"./chevron-down-BIgDt-Eo.js";import"./index-EBLySk6J.js";import"./error-w7TsYwMi.js";import"./BaseCbacBanner-D7UxXv5U.js";import"./makeExternalStore-xIxEL6hr.js";import"./Tooltip-C9gVs0nJ.js";import"./PopoverPopup-CO-oz-Q8.js";import"./toNumber-CAERmn9I.js";import"./useOsdkClient-ZzKuYGir.js";import"./tick-BOFkJvoA.js";import"./DropdownField-U6htmsLd.js";import"./withOsdkMetrics-CKkOy2IX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
