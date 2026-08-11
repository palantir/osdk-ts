import{j as i}from"./iframe-DYVamJ0c.js";import{O as p}from"./object-table-DblF4JDE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cz9i_cXF.js";import"./preload-helper-BKQhuHFM.js";import"./Table-DP--Ko5L.js";import"./index-DDVzKPeS.js";import"./Dialog-BdGRGrER.js";import"./cross-ZvvnBvAW.js";import"./svgIconContainer-DDKAKQ5N.js";import"./useBaseUiId-Dp5szWtR.js";import"./InternalBackdrop-Y7EEmORf.js";import"./composite-DvVYIwpT.js";import"./index-CS_faMAq.js";import"./index-4i5nJL9N.js";import"./index-D6PjjnI1.js";import"./useEventCallback-It5AU2GK.js";import"./SkeletonBar-U_6zsVeg.js";import"./LoadingCell-B68td28d.js";import"./ColumnConfigDialog-DjgJXpSK.js";import"./DraggableList-Dzg79a4e.js";import"./search-CNj8TXQm.js";import"./Input-BJ9fIVV-.js";import"./useControlled-rbncU9dQ.js";import"./isEqual-D9FM6jV5.js";import"./isObject-CWjh4YEm.js";import"./Button-B0mGoHRN.js";import"./ActionButton--6p0rxTX.js";import"./Checkbox-qhAqN2iD.js";import"./useValueChanged-BLJdW2rA.js";import"./CollapsiblePanel-CwNM9_AI.js";import"./MultiColumnSortDialog-BR-X1BMR.js";import"./MenuTrigger-B11uQSdh.js";import"./CompositeItem-BBaNk5MK.js";import"./ToolbarRootContext-1-HwXect.js";import"./getDisabledMountTransitionStyles-B41_0Tyr.js";import"./getPseudoElementBounds-BnEX3Sqz.js";import"./chevron-down-CDvyxAm0.js";import"./index-ClMUYth_.js";import"./error-BsbpZONe.js";import"./BaseCbacBanner-BqnpFmEE.js";import"./makeExternalStore-Ci8gWGJ6.js";import"./Tooltip-RCvIwlHR.js";import"./PopoverPopup-jsI3MN-h.js";import"./toNumber-58R2wJ1m.js";import"./useOsdkClient-DZnVKV7U.js";import"./tick-D-N2RUy5.js";import"./DropdownField-5xkyWwwi.js";import"./withOsdkMetrics-DIqDKAks.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
