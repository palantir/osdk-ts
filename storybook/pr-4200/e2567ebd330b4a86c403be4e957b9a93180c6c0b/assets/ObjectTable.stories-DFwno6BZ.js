import{j as i}from"./iframe-u7IuoPqS.js";import{O as p}from"./object-table-CwiiGrwV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DDfn1T4e.js";import"./preload-helper-Cj56MnTO.js";import"./Table-Di4wiE30.js";import"./index-BoeQsLqp.js";import"./Dialog-CpvXnFfZ.js";import"./cross-C6E9vWMV.js";import"./svgIconContainer-B7-2IFM8.js";import"./useBaseUiId-BbTWfvqf.js";import"./InternalBackdrop-B6YckNyz.js";import"./composite-CN58o8c7.js";import"./index-Dj4--fik.js";import"./index-D32Dt5Vb.js";import"./index-BpkgF5rv.js";import"./useEventCallback-CKntwpr7.js";import"./SkeletonBar-D7FcAjBa.js";import"./LoadingCell-C7rWRneL.js";import"./ColumnConfigDialog-DmWSH25A.js";import"./DraggableList-DhymAh2k.js";import"./search-DFsiEXmE.js";import"./Input-zHybezEW.js";import"./useControlled-Bz9okVK9.js";import"./Button-CvzuhgBL.js";import"./small-cross-DaEkKO8E.js";import"./ActionButton-C24F2_0f.js";import"./Checkbox-Dqft24kT.js";import"./useValueChanged-IctLC50s.js";import"./CollapsiblePanel-BXTP71-2.js";import"./MultiColumnSortDialog-wCdTEjlb.js";import"./MenuTrigger-Z8BjAXwH.js";import"./CompositeItem-KI1SOpIs.js";import"./ToolbarRootContext-DD30MDHZ.js";import"./getDisabledMountTransitionStyles-CiLgfWr9.js";import"./getPseudoElementBounds-cKkhOfCl.js";import"./chevron-down-J58PJfTC.js";import"./index-B0Ziw4xI.js";import"./error-BqAhf9VK.js";import"./BaseCbacBanner-DPrwyNKc.js";import"./makeExternalStore-BUehwWYZ.js";import"./Tooltip-JWOTsvNT.js";import"./PopoverPopup-C4ZXIBTy.js";import"./debounce-IxsrJnss.js";import"./useOsdkClient-DIYDfnUU.js";import"./tick-D6HWtL2J.js";import"./DropdownField-BUflj4ln.js";import"./isEqual-BWjeHkq7.js";import"./withOsdkMetrics-myAMZpO7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
