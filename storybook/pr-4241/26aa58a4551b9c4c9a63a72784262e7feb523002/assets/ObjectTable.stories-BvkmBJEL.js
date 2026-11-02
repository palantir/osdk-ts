import{j as i}from"./iframe-DSFURlDA.js";import{O as p}from"./object-table-UUemqtA3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BFAK8CYJ.js";import"./preload-helper-B1VAjeN0.js";import"./Table-D-44ggYt.js";import"./index-n2cVRLUV.js";import"./Dialog-CH-s4w18.js";import"./cross-BfC9nIFZ.js";import"./svgIconContainer-DdvBD_9a.js";import"./useBaseUiId-CPQbMaU1.js";import"./InternalBackdrop-i93WBNhG.js";import"./composite-zLymdlB4.js";import"./index-DEWyNal3.js";import"./index-DatMcuFW.js";import"./index-1g8QVa9w.js";import"./useEventCallback-D-jfKQ1Z.js";import"./SkeletonBar-BAkRYcYG.js";import"./LoadingCell-BD5eCvTL.js";import"./ColumnConfigDialog-wvEfUZ8D.js";import"./DraggableList-CM0711ve.js";import"./search-BUp5dxQj.js";import"./Input-TT4Euawv.js";import"./useControlled-C2QQWcpQ.js";import"./Button-B9oX6qDj.js";import"./small-cross-1OkFxGzR.js";import"./ActionButton-63CS6rUE.js";import"./Checkbox-DrDolBYQ.js";import"./useValueChanged-CboUDFgk.js";import"./CollapsiblePanel-7-q3gSlS.js";import"./MultiColumnSortDialog-Dm-0rn5u.js";import"./MenuTrigger-idfC3K8M.js";import"./CompositeItem-4TlbRyqO.js";import"./ToolbarRootContext-D4dmc43x.js";import"./getDisabledMountTransitionStyles-C6-Suj3S.js";import"./getPseudoElementBounds-B4-845mD.js";import"./chevron-down-DT3G6LtT.js";import"./index-ojfPVnys.js";import"./error-DUIlp0md.js";import"./BaseCbacBanner-Bomlyg8i.js";import"./makeExternalStore-DipsHuCX.js";import"./Tooltip-D-FrCqJr.js";import"./PopoverPopup-BM6OifUC.js";import"./debounce-BCr80lUe.js";import"./useOsdkClient-B7Ec3XZP.js";import"./tick-Bd1kaq1w.js";import"./DropdownField-Ewv0QYli.js";import"./isEqual-DjH9X7M3.js";import"./withOsdkMetrics-CcZF-o22.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
