import{j as i}from"./iframe-cXUSCCB6.js";import{O as p}from"./object-table-6XnqKcwQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CrniXKBc.js";import"./preload-helper-adOW_bmV.js";import"./Table-DwvxmZRS.js";import"./index-DBMlmXL0.js";import"./Dialog-BdOgGv_w.js";import"./cross-DLTJIT7_.js";import"./svgIconContainer-tVdoUfqY.js";import"./useBaseUiId-CRVXGosA.js";import"./InternalBackdrop-D2TKBBWC.js";import"./composite-Do3saceV.js";import"./index-DUupLJDG.js";import"./index-defWb760.js";import"./index-BoQ-yDKy.js";import"./useEventCallback-C8yKHfi2.js";import"./SkeletonBar-C8cuZi-g.js";import"./LoadingCell-1tdnReNN.js";import"./ColumnConfigDialog-CoRjzqhL.js";import"./DraggableList-BxDpQ5QZ.js";import"./search-CJIpoAKT.js";import"./Input-CXM44AHw.js";import"./useControlled-DboXIBjA.js";import"./Button-0UL0G0NB.js";import"./small-cross-CaWrlcpM.js";import"./ActionButton-DhzZi43U.js";import"./Checkbox-BnvfGDrP.js";import"./useValueChanged-btkvjNa5.js";import"./CollapsiblePanel-Bg1TLScK.js";import"./MultiColumnSortDialog-DiFy_qi3.js";import"./MenuTrigger-u0wPTgmO.js";import"./CompositeItem-DJYWyjQd.js";import"./ToolbarRootContext-BXvi54FI.js";import"./getDisabledMountTransitionStyles-Dc3btUOj.js";import"./getPseudoElementBounds-B4b0mkX5.js";import"./chevron-down-CiiM93uJ.js";import"./index-Hhj64oQw.js";import"./error-BiDYwilF.js";import"./BaseCbacBanner--wVvfq6l.js";import"./makeExternalStore-CLMwzEq6.js";import"./Tooltip-EqI8EUoF.js";import"./PopoverPopup-B1qYlCLn.js";import"./debounce-DUeQK-_L.js";import"./useOsdkClient-Cw1zJZ0U.js";import"./tick-BOTkIjTY.js";import"./DropdownField-DKMtjVPQ.js";import"./isEqual-2_X_7Niv.js";import"./withOsdkMetrics-B49tYBTG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
