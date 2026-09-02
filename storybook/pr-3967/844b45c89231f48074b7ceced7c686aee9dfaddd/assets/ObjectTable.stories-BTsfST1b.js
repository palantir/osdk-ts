import{j as i}from"./iframe-BDYkqvKe.js";import{O as p}from"./object-table-K5fMhv6U.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BLU7ojyy.js";import"./preload-helper-C36rJOAe.js";import"./Table-CT3JE7pW.js";import"./index-BRka1pCh.js";import"./Dialog-gUo4l4fk.js";import"./cross-BjNcEcWu.js";import"./svgIconContainer-CCyU9VHa.js";import"./useBaseUiId-UK_jdfAB.js";import"./InternalBackdrop-BmAe8PJ1.js";import"./composite-BODYGvTF.js";import"./index-F-0Lu3oA.js";import"./index-DMkY-4jo.js";import"./index-B9-WbJqu.js";import"./useEventCallback-iMH7A3pZ.js";import"./SkeletonBar-Cq_nprHL.js";import"./LoadingCell-DJ7KQfZH.js";import"./ColumnConfigDialog-iTIe4fMe.js";import"./DraggableList-DCvsjFKH.js";import"./search-CSsyQg3w.js";import"./Input-BR9BGUIw.js";import"./useControlled-ByKl2Iuv.js";import"./Button-CIPwZs7k.js";import"./small-cross-Cbjgg7ob.js";import"./ActionButton-DBYSomqw.js";import"./Checkbox-RA2YgDOE.js";import"./useValueChanged-CfjX2SMH.js";import"./CollapsiblePanel-aJJDXHKx.js";import"./MultiColumnSortDialog-CLpn8cYf.js";import"./MenuTrigger-etkbVx6I.js";import"./CompositeItem-CU4sB2os.js";import"./ToolbarRootContext-CxcdMdex.js";import"./getDisabledMountTransitionStyles-gipNIZ-N.js";import"./getPseudoElementBounds-BidLTe78.js";import"./chevron-down-DpmU34Wb.js";import"./index-DQIJwSCX.js";import"./error-BUARWoS0.js";import"./BaseCbacBanner-vwuuPXIN.js";import"./makeExternalStore-CG2NmNwS.js";import"./Tooltip-Bh4GJ4Q9.js";import"./PopoverPopup-CW8vS9sl.js";import"./debounce-BSt0zZQY.js";import"./useOsdkClient-dYN0Yvuj.js";import"./tick-ApKf3hEQ.js";import"./DropdownField-DwIxO86o.js";import"./isEqual-DnYx_c7F.js";import"./withOsdkMetrics-BDaIIid_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
