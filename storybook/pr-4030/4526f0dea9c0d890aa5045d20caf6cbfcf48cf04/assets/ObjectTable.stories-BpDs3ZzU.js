import{j as i}from"./iframe-BDNIqcwM.js";import{O as p}from"./object-table-BRZikq7I.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Zqd4KKks.js";import"./preload-helper-AKgPBeH6.js";import"./Table-CU6QB62K.js";import"./index-CxoqJ8Ca.js";import"./Dialog-Cu7AZGLK.js";import"./cross-DSoUlEls.js";import"./svgIconContainer-YSUGMhqY.js";import"./useBaseUiId-D6uxKhCZ.js";import"./InternalBackdrop-DHNCq7so.js";import"./composite-CjQ-M14e.js";import"./index-DYO33UQo.js";import"./index-Dy4KxyPS.js";import"./index-6Oer6Qui.js";import"./useEventCallback-C8nnE3Sq.js";import"./SkeletonBar-4B0Vdclq.js";import"./LoadingCell-BsOPEaH3.js";import"./ColumnConfigDialog-BfdZhTeV.js";import"./DraggableList-Bk2ik8FH.js";import"./search-B7vNZRvA.js";import"./Input-CGsPuuzg.js";import"./useControlled-jo7j2Y8W.js";import"./Button-DAHfEEi6.js";import"./small-cross-ZYK0SGzG.js";import"./ActionButton-hlvEU7PC.js";import"./Checkbox-Dn3WdtnT.js";import"./useValueChanged-C0sUDO03.js";import"./CollapsiblePanel-CmEgATYW.js";import"./MultiColumnSortDialog-kqTHFaI3.js";import"./MenuTrigger-7B5Xr4MV.js";import"./CompositeItem-9re6AgtS.js";import"./ToolbarRootContext-BkqYYhP3.js";import"./getDisabledMountTransitionStyles-DFR4pKCD.js";import"./getPseudoElementBounds-BLuItyL9.js";import"./chevron-down-B8PeAqOW.js";import"./index-DKSVa_Lx.js";import"./error-CizQVsJR.js";import"./BaseCbacBanner-C0CCbaP8.js";import"./makeExternalStore-qbxX8lsc.js";import"./Tooltip-CXp93mpB.js";import"./PopoverPopup-C_vvYsh3.js";import"./debounce-C30szGMw.js";import"./useOsdkClient-bCCWw78J.js";import"./tick-C99eCLyr.js";import"./DropdownField-BiIjaXyg.js";import"./isEqual-DuCh0bkd.js";import"./withOsdkMetrics-DbOReG2B.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
